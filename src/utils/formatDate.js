import moment from "moment";

export default function formatDate(isoDate) {
  return moment.utc(isoDate).format("hh:mm a Do MMM");
}
