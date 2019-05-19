import { Chart, Geom, Axis, Tooltip, Legend, Coord } from 'bizcharts';
import React,{Component} from "react";
import DataSet from "@antv/data-set";
  // 渲染图表
  export default class BizCharts extends Component{
      render(){
        const data = [
            {time : "2019-03-15" , msg : 200 , info : 1200 , num : 800},
            {time : "2019-03-16" , msg : 600 , info : 900 , num: 200},
            {time : "2019-03-17" , msg : 2000 , info : 500 , num : 1500},
            {time : "2019-03-18" , msg : 1200 , info : 300 , num : 600},
            {time : "2019-03-19" , msg : 500 , info : 1600 , num : 1800},
            {time : "2019-03-20" , msg : 880 , info : 1800 , num : 900},
            {time : "2019-03-21" , msg : 1600 , info  : 200 , num : 330}
        ]

        //更换Tooltip里面的文字，默认是根据data的key显示
        const cols = {
          msg : {
            alias : "加好友数量",
            onHover : ()=>{
              console.log(11)
            }
          },
          info : {
            alias : "未通过数量"
          },
          num : {
            alias : "总数量"
          }
        };

          return(
              <div style={{width:700}}>
                <Chart width={1500} height={420} scale={cols} data={data}>
                    <Geom type="line" position="time*msg" color="pink" size={3}/>
                    <Geom type="point" position="time*msg" shape={"circle"} color={"pink"} style={{ stroke: "pink",lineWidth: 1}} size={4}/>

                    <Geom type="line" position="time*info" color="green" size={3}/>
                    <Geom type="point" position="time*info" shape={"circle"} color={"green"} style={{ stroke: "green",lineWidth: 1}} size={4}/>

                    <Geom type="line" position="time*num" color="blue" size={3}/>
                    <Geom type="point" position="time*num" shape={"circle"} color={"blue"} style={{ stroke: "blue",lineWidth: 1}} size={4}/>
                    
                    <Axis name="time"/>
                    <Axis name="msg" />
                    <Axis name="info" visible={false}/>
                    <Axis name="num" visible={false}/>
                    <Tooltip offset={20}/>
                    <Coord scale={[0.9,1]} type="rect"/>
                    <Legend custom={true} hoverable={true} items={[
                      { value: '加好友数量', fill: 'pink', marker: 'triangle' },
                      { value: '未通过数量', fill: 'green', marker: 'square' },
                      { value: '总数量', fill: 'blue', marker: 'square' }
                    ]}
                    />
                </Chart>

                <span title={333}>11</span>
              </div>
          )
      }
  }