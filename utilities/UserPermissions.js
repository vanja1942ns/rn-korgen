import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';


class UserPermissions {
    getCameraPermission = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL, Permissions.CAMERA);
            if (status !== "granted") {
                Alert.alert(
                    'Insufficient permissions!',
                    'You need to grant camera permissions to use this app.',
                    [{ text: 'Okay' }]);
            }
        }
    };
}

export default new UserPermissions();