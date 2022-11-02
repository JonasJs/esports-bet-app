import {Center, Spinner} from "native-base"
export function Loading() {
  return (
    <Center flex={1} bgColor="purple.700">
      <Spinner color="white" />
    </Center>
  )
} 