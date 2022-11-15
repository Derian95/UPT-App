import { Button, View, Text } from "react-native";
import {
  CardHeader,
  CardTime,
  CardAssistance,
  CardNotes,
} from "../components/home";
import { useNavigation, useRoute } from "@react-navigation/native";
import tw from "twrnc";
import { propsStack, routeProps } from "../navigation/models";
import { Layout } from "../components/ui/layout/Layout";

export const Home = () => {
  const navigate = useNavigation<propsStack>();
  const route = useRoute<routeProps>();

  const { idSemester, idStament } = route.params;

  return (
    <Layout
      header={<CardHeader />}
      children2={
        <>
          <CardAssistance />
          <CardTime />
          <CardNotes idSemester={idSemester} idStament={idStament} />
        </>
      }
    />
  );
};
