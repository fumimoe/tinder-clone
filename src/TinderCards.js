import React, { useEffect, useState } from "react";
import TinderCard from 'react-tinder-card';
import './TinderCard.css';
import {db} from './config';



const TinderCards = () => {
  const [people, setPeople] = useState([]);

    useEffect(() => {
       const unsubscribe =  db.collection('people').onSnapshot((snapshot) =>(
            // peopleの全ての情報がsnapshot.docs()に入ってる
            // dataはmapで回してるのはnameとurl
            setPeople(snapshot.docs.map((doc) => doc.data()))
        ));

        return() => {
          unsubscribe();
        }


    },[])
    // 鈴木誠也 https://i.daily.jp/baseball/carp/2020/06/20/Images/f_13440661.jpg
    // 柳田 https://sp.softbankhawks.co.jp/cmn/pl_img/news/2020/07/00003534_01.jpg
    // 岡本の画像url https://img-tokyo-sports.com/wp-content/uploads/2021/02/cba7d11ecd90637ce966495df2be3f08-450x404.jpg


  // setPeople([...people,'takeda','tanaka'])
  // ...とすることで新しく配列を展開して新しい配列をsetする

  // 同じ意味だけどreactでは使わない
  // const people = []
  // people.push('takeda','tanaka')

  return (
    <div>
      <h1>thider card</h1>
      <div className="tinderCards__cardContainer">
      {people.map((person) =>
        <TinderCard 
        className="swipe" 
        key={person.name}
        // ここで指定した文字の方向にはスワイプできない
        preventSwipe={['up', 'down']}
        >
            
            <div style={{backgroundImage : `url(${person.url})`}} className="card">
                <h3>{person.name}</h3>
            </div>
        </TinderCard>
      )}
      </div>
    </div>
  );
};

export default TinderCards;
