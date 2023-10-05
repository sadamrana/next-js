
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
    <h1> SAdam g
    </h1>
    <Sadam />
    <Sadam name="Sultan"/>
    </main>
  )
}

const Sadam= (props)=> {
return (
<div>My name is Sadam {props.name}

 </div>

)
}