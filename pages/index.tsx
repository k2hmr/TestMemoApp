import type { NextPage, GetServerSideProps } from 'next'
import {useState,useEffect} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

interface Props {
  id:number;
  createdAt: Date;
  updatedAt: Date;
  title: string; 
  content: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  // APIやDBからのデータ取得処理などを記載

  const response = await fetch('http://localhost:3001/api/get-memos')
  const data = await response.json()
  if(data.memos === "undefined"){
      return { props: [{
        id: 1,
        createdAt: Date.now,
        updatedAt: Date.now,
        title: "string",
        content: "string",
      }]
    }
  }
  console.log("tets");
  console.log(data);
  //console.log(data.memos[0])

  return {
    props: data[0],
  };
};

// export async function getServerSideProps(): {
//   const response = await fetch('http://localhost:3000/api/get-memos')
//   const data = await response.json()

//   return { props: { data } }
// }

const Home = (props: Props) => {
  // const [memos, setMemos] = useState<Memo[]>([])
  // useEffect(() => {
  //   const fetchMemos = async () => {
  //     const response = await fetch('/api/get-memos')
  //     const data = await response.json()
  //     console.log("data");
  //     console.log(data);
  //     console.log(data.memos[0]);
  //     setMemos(data.memos)
  //   }
  //   fetchMemos()
  // },[])

  return (
    <div>
      <ul>
        {
          props.content
          /* {memos.map(memo => (
          <li key={memo.id}>{memo.title}:{memo.content}</li>
        ))} */}
      </ul>
    </div>
  )
}

export default Home
