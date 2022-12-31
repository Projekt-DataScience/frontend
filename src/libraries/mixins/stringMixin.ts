export const truncateStringMixin = {
    methods: {
        truncateString(str: String, n: number) {
            if (str.length > n) {
                return str.substring(0, n) + "...";
            } else {
                return str;
            }
        },
    },
}

export const concateStringMixin = {
    methods: {
        concateStrings(...args: string[]) {
            var tmp = "";
            for (var i = 0; i < args.length; i++) {
                tmp = tmp + args[i] + " ";
            }
            return tmp;
        },
    },
}

export const stringToDateMixin = {
    methods: {
        stringToDateLongWeekday(str: string) {
            return new Date(str).toLocaleDateString("de-DE", {
                year: "numeric",
                month: "short",
                day: "numeric",
                weekday: "long",
            });
        },
        stringToDate(str: string) {
            return new Date(str).toLocaleDateString("de-DE", {
                year: "numeric",
                month: "short",
                day: "numeric",
                weekday: "long",
            });
        },
    },
}

export const changeAppName= {
    methods: {
        getLongNameForApp(str: string) {
            if (str === "lpa") {
                return "Layered Process Audit"
            }
        }

    }
}

export const germanDateStrings={
    methods: {
        getGermanMonthValues(month: string){
            if(month === "january"){
              return "Januar"
            }else if(month === "february"){
              return "Februar"
            }else if(month === "march"){
              return "März"
            }else if(month === "april"){
              return "April"
            }else if(month === "may"){
              return "Mai"
            }else if(month === "june"){
              return "Juni"
            }else if(month === "july"){
              return "Juli"
            }else if(month === "august"){
              return "August"
            }else if(month === "september"){
              return "September"
            }else if(month === "october"){
              return "Oktober"
            }else if(month === "november"){
              return "November"
            }else if(month === "december"){
              return "Dezember"
            }else{
              return "unkown"
            }
          },
          getGermanMonthValuesShort(month: string){
            if(month === "january"){
              return "Jan"
            }else if(month === "february"){
              return "Feb"
            }else if(month === "march"){
              return "Mär"
            }else if(month === "april"){
              return "Apr"
            }else if(month === "may"){
              return "Mai"
            }else if(month === "june"){
              return "Jun"
            }else if(month === "july"){
              return "Jul"
            }else if(month === "august"){
              return "Aug"
            }else if(month === "september"){
              return "Sep"
            }else if(month === "october"){
              return "Okt"
            }else if(month === "november"){
              return "Nov"
            }else if(month === "december"){
              return "Dez"
            }else{
              return "unkown"
            }
          },
          getGermanWeekdayValues(day: string){
            if(day === "monday"){
              return "Montag"
            }else if(day === "tuesday"){
              return "Dienstag"
            }else if(day === "wednesday"){
              return "Mittwoch"
            }else if(day === "thursday"){
              return "Donnerstag"
            }else if(day === "friday"){
              return "Freitag"
            }else if(day === "saturday"){
              return "Samstag"
            }else if(day === "sunday"){
              return "Sonntag"
            }else{
              return "unkown"
            }
          },
          getGermanWeekdayValuesShort(day: string){
            if(day === "monday"){
              return "Mo"
            }else if(day === "tuesday"){
              return "Di"
            }else if(day === "wednesday"){
              return "Mi"
            }else if(day === "thursday"){
              return "Do"
            }else if(day === "friday"){
              return "Fr"
            }else if(day === "saturday"){
              return "Sa"
            }else if(day === "sunday"){
              return "So"
            }else{
              return "unkown"
            }
          }
    }
}