/* FireLib in IgniteJS */

import { Webpage, Title, Block, Button, StyleSheet, AreaButton } from "../lib/FireLib.js";

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: 'blue',
  },
  block: {
    backgroundColor: 'lightgray',
    padding: 20,
    borderRadius: 10,
  },
  areabutton : {
    border: '1px solid black',
  }
});

export default function App() {
  const hugo = "Hugo";
  return (
    <Webpage pageTitle="I am something">
      <Title type="SubTitle" style={styles.title}>This is a h1</Title>
      <Block style={styles.block}> I am a block {hugo}</Block>
      <Button id={"btn-1"} content={"Im a button"} onClick={() => alert('Hello mom!')} />
      <AreaButton style={styles.areabutton} id={"area-1"} onClick={() => alert('Hello children!')}>children</AreaButton>
    </Webpage>
  );
}

