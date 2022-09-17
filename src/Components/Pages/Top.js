import TopCss from '../../Modules/CSS/TopCss.module.css';

import {Link} from 'react-router-dom';
import { useEffect, useState } from 'react';

import MyIcon from '../../Modules/Images/MyIcon.png';

import Works from '../../Modules/Json/works.json';

function Top () {
    const [workItems, setWorkItems] = useState([]);
    useEffect(function () {
        // console.log(Works);
        const workItemList = [];
        for (let i = 0; i < Works.length; i++) {
            workItemList.push(
                <>
                    <div className={TopCss.workItem}>
                        <div className={TopCss.workItemHover}>
                            <p className={TopCss.workTitle}>{Works[i].title}</p>
                            <p className={TopCss.workDiscription}>{Works[i].discription}</p>
                        </div>
                        <img src={Works[i].image} alt={Works[i].id} />
                    </div>
                </>
            );
        }
        setWorkItems(workItemList);
    }, []);
    return (
        <>
            <section id={TopCss.selfIntroduction} className={TopCss.sectionWrap}>
                <h2 className={TopCss.sectionTitle}>About me</h2>
                <div className={TopCss.sectionContentWrap}>
                    <div className={TopCss.sectionContentLeft}>
                        <img id={TopCss.MyIcon} src={MyIcon} alt="MyIcon" />
                        {/* <img id={TopCss.MyIcon} src="../../Modules/Images/MyIcon.png" alt="MyIcon" /> */}
                    </div>
                    <div className={TopCss.sectionContentRight}>
                        <div className={TopCss.profile}>
                            <h3>Profile</h3>
                            <div className={TopCss.contentStatus}>
                                <p>名前: 山本 一樹</p>
                                <p>生年月日: 2000/07/15 (22歳)</p>
                                <p>趣味: ドライブ、温泉、お酒</p>
                                <p>やりたいこと:</p>
                                <p className={TopCss.list}>- フロントエンド開発</p>
                                <p className={TopCss.list}>- バックエンド開発</p>
                                <p className={TopCss.list}>- IoT開発</p>
                            </div>
                        </div>
                        <div className={TopCss.history}>
                            <h3>History</h3>
                            <div className={TopCss.contentStatus}>
                                <p>2016年4月 国立米子工業高等専門学校 電子制御工学科 入学</p>
                                <p>2019年3月 国立米子工業高等専門学校 電子制御工学科 中途退学</p>
                                <p>2019年4月 HAL名古屋 WEB学科 入学</p>
                                <p>2021年3月 HAL名古屋 WEB学科 卒業</p>
                                <p>2021年4月〜現在 Webエンジニア</p>
                            </div>
                        </div>
                        <div className={TopCss.skills}>
                            <h3>Skills</h3>
                            <div className={TopCss.contentStatus}>
                                <p>HTML / CSS / SCSS</p>
                                <p>JavaScript / jQuery / React.js</p>
                                <p>Node.js / Express</p>
                                <p>PHP / Laravel</p>
                                <p>MySQL</p>
                                <p>Linux / Shell Script</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id={TopCss.myWorks} className={TopCss.sectionWrap}>
                <h2 className={TopCss.sectionTitle}>Works</h2>
                <div className={TopCss.sectionContentWrap}>
                    {workItems}
                </div>
            </section>
        </>
    );
};

export default Top;
