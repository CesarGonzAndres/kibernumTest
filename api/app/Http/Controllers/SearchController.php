<?php

namespace App\Http\Controllers;

use DB;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class SearchController extends Controller
{

    public function index(Request $request) {
        $data = $request->json()->all();
        $db = app('db');
        $search = $db->connection('mysql');
        if($data['keyword']) {
            $result = $search->select('SELECT id, titulo FROM kibernum.flights where tags LIKE '."'%".$data["keyword"]."%'");
            return response()->json($result, 200);
        }
        return response()->json(["Faltan parametros"], 200);
    }

    public function rankingList(Request $request) {
        $data = $request->json()->all();
        $db = app('db');
        $search = $db->connection('mysql');
        // TOP 20
        $result = $search->select("SELECT f.titulo, r.timesVisited, id_flight as id FROM ranking AS r LEFT JOIN flights AS f ON f.id = r.id_flight ORDER BY timesVisited DESC LIMIT 20");
        return response()->json($result, 200);
    }

    public function subRanking(Request $request) {
        $data = $request->json()->all();
        $db = app('db');
        $search = $db->connection('mysql');
        $id = $data['id'];
        // sub ranking
        $result = $search->select("SELECT tag, count(*) as count FROM kibernum.tagsPerFlight where id_flight = $id group by tag order by count desc limit 5");
        return response()->json($result, 200);
    }

    public function detailedView(Request $request) {
        $data = $request->json()->all();
        $db = app('db');
        $conn = $db->connection('mysql');
        $id = $data['id'];
        $tagUsed = $data['tagUsed'];

        $findFlight = $conn->select("SELECT * FROM kibernum.flights WHERE id = $id");
        $findRanking = $conn->select("SELECT * FROM kibernum.ranking WHERE id_flight = $id");
        
        if (!empty($findRanking[0])) {
            $timesVisited = $conn->select("SELECT timesVisited FROM kibernum.ranking WHERE id_flight = $id");
            $visited = $timesVisited[0]->timesVisited + 1;
            $countVisit = $conn->update("UPDATE kibernum.ranking set timesVisited = '$visited' where id_flight = ?", ["$id"]);
            $newTag = $conn->insert('insert into kibernum.tagsPerFlight (id_flight, tag) values (?, ?)', [$id, $tagUsed]);
        } else {
            $newRank = $conn->insert('insert into kibernum.ranking (id_flight, timesVisited) values (?, ?)', [$id, '1']);
            $newTag = $conn->insert('insert into kibernum.tagsPerFlight (id_flight, tag) values (?, ?)', [$id, $tagUsed]);
        }
        return response()->json($findFlight, 200);
    }

}