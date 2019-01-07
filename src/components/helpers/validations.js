

const checkThen = (obj) => {
    if(!isDefined(obj)) return "Debes seleccionar la fecha de programación para el envío.";

    return true;
};

const checkTitle = (obj) => {
    if(!isDefined(obj)) return "Debes ingresar un nombre de campaña";

    return true;
};

const checkMsg = (obj) => {
    if(!isDefined(obj)) return "Debes ingresar un mensaje";
    if(!minLength(obj, 10)) return "El mensaje es demasiado corto";

    return true;
};

const checkNumber = (obj) => {
    const number_regex = /^\d+$/;

    if(!(number_regex.test(obj))) return "Número inválido";

    return true;
};

const check = (item, obj) => {
    switch (item) {
        case "title": return checkTitle(obj);
        case "number": return checkNumber(obj);
        case "then": return checkThen(obj);
        case "msg": return checkMsg(obj);
        default:
    }
};

const isDefined = (obj) => {
    if (isEmpty(obj)) {
        return false;
    }

    if (isBlank(obj)) {
        return false;
    }

    return obj !== null;
};

const isEmpty = (str) => {
    return (!str || 0 === str.length);
};

const isBlank = (str) => {
    return (!str || /^\s*$/.test(str));
};

const minLength = (obj, min) => {
    return (obj.trim().length >= min);
};

const timeConverter = (UNIX_timestamp , format) => {
  
  const a = new Date(UNIX_timestamp);
  const year = a.getFullYear();
  const month = a.getMonth();
  const date = a.getDate();
  const hour = ( a.getHours() < 10) ? `0${a.getHours()}` : a.getHours();
  const min = ( a.getMinutes() < 10) ? `0${a.getMinutes()}` : a.getMinutes();
  const sec = ( a.getSeconds() < 10) ? `0${a.getSeconds()}` : a.getSeconds();
  let time;
  switch(format)
  {
    case "dd/mm/yyyy":
        time = date + '/' + month + '/' + year;
        break;    
    case "dd/mm/yyyy hh:mm":
        time = date + '/' + month + '/' + year + ' ' + hour + ':' + min;
        break;
    case "dd/mm/yyyy hh:mm:ss":
        time = date + '/' + month + '/' + year + ' ' + hour + ':' + min + ':' + sec ;
        break;
    case "hh:mm:ss":
        time = hour + ':' + min + ':' + sec ;
        break;
    case "hh:mm":
        time = hour + ':' + min + ':' + sec ;
        break;
    default:
        time = date + '/' + month + '/' + year + ' ' + hour + ':' + min + ':' + sec ;
  }
  
  return time;
}

module.exports = {
    isDefined, check , timeConverter
};