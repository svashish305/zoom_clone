export const sidebarLinks = [
	{
		label: 'Home',
		route: '/',
		imgUrl: '/icons/Home.svg',
	},
	{
		label: 'Upcoming',
		route: '/upcoming',
		imgUrl: '/icons/upcoming.svg',
	},
	{
		label: 'Previous',
		route: '/previous',
		imgUrl: '/icons/previous.svg',
	},
	{
		label: 'Recordings',
		route: '/recordings',
		imgUrl: '/icons/Video.svg',
	},
	{
		label: 'Personal Room',
		route: '/personal-room',
		imgUrl: '/icons/add-personal.svg',
	},
]

export const avatarImages = [
	'/images/avatar-1.jpeg',
	'/images/avatar-2.jpeg',
	'/images/avatar-3.png',
	'/images/avatar-4.png',
	'/images/avatar-5.png',
]

export const formatTime = (date: Date) => {
	if (!date || isNaN(date.getTime())) {
    return '';
  }
	let hours = date.getHours();
	const minutes = date.getMinutes();
	const ampm = hours >= 12 ? 'PM' : 'AM';

	hours = hours % 12;
	hours = hours ? hours : 12;
	const minutesStr = minutes < 10 ? '0' + minutes : minutes.toString();
  
  return `${hours}:${minutesStr} ${ampm}`;
}