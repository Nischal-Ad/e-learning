import calender from '../img/calendar.svg';
import file from '../img/file.svg';
import user from '../img/user.svg';
import Styles from '../css/Style.module.css';
export const services: {
	img: string;
	heading: string;
	desc: string;
	className?: string;
}[] = [
	{
		img: file,
		heading: 'Easy Scheduling & Attendance Tracking',
		className: Styles.services_roundImg,
		desc: 'Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance',
	},
	{
		img: calender,
		heading: 'Easy Scheduling & Attendance Tracking',
		className: Styles.services_roundImg,
		desc: 'Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance',
	},
	{
		img: user,
		heading: 'Easy Scheduling & Attendance Tracking',
		className: Styles.services_roundImg,
		desc: 'Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance',
	},
];
