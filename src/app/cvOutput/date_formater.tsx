export default function dateToString(start_date, end_date){

    let start_month = start_date.toLocaleString('default', { month: 'long' }).substring(0, 3)
    let start_year = start_date.getFullYear()
    let end_month = ""
    let end_year = ""

    if(end_date != null){
        end_month = end_date.toLocaleString('default', { month: 'long' }).substring(0, 3)
        end_year = end_date.getFullYear()

        return start_month + " " + start_year + " - " + end_month + " " + end_year
    }

    return start_month + " " + start_year + " - Present"
}

const toDate = (d) => {
  if (!d) return null;
  return d instanceof Date ? d : new Date(d);
};