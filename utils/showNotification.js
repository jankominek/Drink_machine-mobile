import { Notifier, Easing } from "react-native-notifier";

export const showNotification = (title, description) => {
	return Notifier.showNotification({
		title: title,
		description: description,
		duration: 0,
		showAnimationDuration: 800,
		containerStyle: { translateY: 100 },
		showEasing: Easing.bounce,
		hideOnPress: true,
	});
};
