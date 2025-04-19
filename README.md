# IgniteJS

> Create your own simple React-like framework. Less bloat. More control. Modern vibes.

---

### What is IgniteJS?

**IgniteJS** is a minimal framework inspired by ReactJS — but stripped down to the essentials.

Built for:

- Developers who want to **understand the core** of component-based rendering
- Projects that demand **performance, control, and zero bloat**
- Tinkerers and builders creating their **own modern frontend stack**

---

###  Why IgniteJS?

 **Familiar JSX syntax**  
 **Component-based rendering**  
 **Custom style system** (React Native–inspired)  
 **Server-side rendering** with config  
 **No virtual DOM, no overhead**  

---

###  Example with FireLib

```.js
// App.js
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



