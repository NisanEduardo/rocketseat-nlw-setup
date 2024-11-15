import dayjs from "dayjs";

export function generateDateFromYearBeginning() {
	const firstDayOfMonth = dayjs().startOf("month");
	const today = new Date();

	const dates = [];
	let compareDate = firstDayOfMonth;

	while (compareDate.isBefore(today)) {
		dates.push(compareDate.toDate());
		compareDate = compareDate.add(1, "day");
	}

	return dates;
}
