import { Button, View } from 'react-native';
import { router, useRouter } from 'expo-router';
import { useExpoRouter } from 'expo-router/build/global-state/router-store';

function CreateCampaignStep1() {
  const router2 = useRouter();
  const router3 = useExpoRouter();
  return (
    <View>
      <Button
        title={'navigate'}
        onPress={() => router.navigate('./step2')}
      ></Button>
      <Button
        title={'navigate'}
        onPress={() => router2.navigate('./step2')}
      ></Button>
      <Button
        title={'navigate'}
        onPress={() => router3.navigate('./step2')}
      ></Button>
    </View>
  );
}
export default CreateCampaignStep1;
