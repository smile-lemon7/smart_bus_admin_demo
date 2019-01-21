import React, { Component, Fragment } from 'react';
import { connect } from 'dva';
import {
  Table,
  Input,
  InputNumber,
  Popconfirm,
  Form,
  Button,
  Dropdown,
  Menu,
  Icon,
  Radio,
  Card,
} from 'antd';
import { FormattedMessage } from 'umi/locale';
import { routerRedux } from 'dva/router';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
// import BMap  from 'BMap';


@connect(
  trainsit_map => ({
    trainsit_map,
  }),
  dispatch => ({})
)
class Products extends Component {
  componentDidMount() {
    const { BMap } = window;
    var map = new BMap.Map("trainsit_map"); // 创建Map实例
    map.centerAndZoom(new BMap.Point(116.417854,39.921988), 12); // 初始化地图,设置中心点坐标和地图级别
    setTimeout(function(){
      map.setZoom(12);   
    }, 2000);
    map.enableScrollWheelZoom(true);
    map.disableDragging();     //禁止拖拽
    setTimeout(function(){
      map.enableDragging();   //两秒后开启拖拽
      //map.enableInertialDragging();   //两秒后开启惯性拖拽
    }, 2000);

    var site_info = [[116.462335,40.022653,"地址：来广营桥"],[116.490506,39.950123,"朝阳公园"],[116.500855,39.874413,"北京欢乐谷"],];
    var bus_info = [[116.450837,39.993031,"公交车-01"],[116.49798,39.913385,"公交车-02"]];

    var opts = {
          width : 250,     // 信息窗口宽度
          height: 80,     // 信息窗口高度
          title : "信息窗口" , // 信息窗口标题
          enableMessage:true//设置允许信息窗发送短息
          };
    //站点1
    for(var i=0;i<site_info.length;i++){
      // var myIcon = new BMap.Icon("/icons/site.png", new BMap.Size(40,40));
      // var marker = new BMap.Marker(new BMap.Point(site_info[i][0],site_info[i][1]),{icon:myIcon});  // 创建标注
      var marker = new BMap.Marker(new BMap.Point(site_info[i][0],site_info[i][1]));  // 创建标注
      var content = site_info[i][2];
      map.addOverlay(marker);               // 将标注添加到地图中
      addClickHandler(content,marker);
    }
    function addClickHandler(content,marker){
      marker.addEventListener("click",function(e){
        openInfo(content,e)}
      );
    }
    function openInfo(content,e){
      var p = e.target;
      var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
      var infoWindow = new BMap.InfoWindow(content,opts);  // 创建信息窗口对象 
      map.openInfoWindow(infoWindow,point); //开启信息窗口
    }
    //站点连线
    var sy = new BMap.Symbol(BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW, {
      scale: 0.6,//图标缩放大小
      strokeColor:'#fff',//设置矢量图标的线填充颜色
      strokeWeight: '2',//设置线宽
    });
    var icons = new BMap.IconSequence(sy, '10', '30');
    var pois = [
      new BMap.Point(116.462335,40.022653),
      new BMap.Point(116.450837,39.993031),
      new BMap.Point(116.490506,39.950123),
      new BMap.Point(116.49798,39.913385),
      new BMap.Point(116.500855,39.874413),
    ];
    var polyline =new BMap.Polyline(pois, {
       enableEditing: false,//是否启用线编辑，默认为false
       enableClicking: true,//是否响应点击事件，默认为true
       icons:[icons],
       strokeWeight:'8',//折线的宽度，以像素为单位
       strokeOpacity: 0.8,//折线的透明度，取值范围0 - 1
      //  strokeColor:"#18a45b" //折线颜色
       strokeColor:"#00f" //折线颜色
    });
    map.addOverlay(polyline);          //增加折线

    // var p1 = new BMap.Point(116.462335,40.022653);
    // var p2 = new BMap.Point(116.500855,39.874413);
    // var driving = new BMap.DrivingRoute(map, {renderOptions:{map: map, autoViewport: true, stroke:'#f00'}});
    // driving.search(p1, p2);
    
    //公交
    for(var i=0;i<bus_info.length;i++){
      var myIcon = new BMap.Icon("/icons/car.png", new BMap.Size(32,32));
      var marker = new BMap.Marker(new BMap.Point(bus_info[i][0],bus_info[i][1]), {icon:myIcon});  // 创建标注
      var content = bus_info[i][2];
      map.addOverlay(marker);               // 将标注添加到地图中
      addClickHandler(content,marker);
    }
    function addClickHandler(content,marker){
      marker.addEventListener("click",function(e){
        openInfo(content,e)}
      );
    }
    function openInfo(content,e){
      var p = e.target;
      var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
      var infoWindow = new BMap.InfoWindow(content,opts);  // 创建信息窗口对象 
      map.openInfoWindow(infoWindow,point); //开启信息窗口
    }


    var site_info2 = [[116.462335,40.022653,"地址：来广营桥"],[116.477858,39.977994,"四元桥"],[116.490506,39.950123,"朝阳公园"],[116.497405,39.912943,'四惠桥'],[116.500855,39.874413,"北京欢乐谷"],];
    // var bus_info = [[116.450837,39.993031,"公交车-01"],[116.49798,39.913385,"公交车-02"]];
    var opts = {
          width : 250,     // 信息窗口宽度
          height: 80,     // 信息窗口高度
          title : "信息窗口" , // 信息窗口标题
          enableMessage:true//设置允许信息窗发送短息
          };
    //站点2
    for(var i=0;i<site_info2.length;i++){
      // var myIcon = new BMap.Icon("/icons/site.png", new BMap.Size(40,40));
      // var marker = new BMap.Marker(new BMap.Point(site_info[i][0],site_info[i][1]),{icon:myIcon});  // 创建标注
      var marker = new BMap.Marker(new BMap.Point(site_info2[i][0],site_info2[i][1]));  // 创建标注
      var content = site_info2[i][2];
      map.addOverlay(marker);               // 将标注添加到地图中
      addClickHandler(content,marker);
    }
    function addClickHandler(content,marker){
      marker.addEventListener("click",function(e){
        openInfo(content,e)}
      );
    }
    function openInfo(content,e){
      var p = e.target;
      var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
      var infoWindow = new BMap.InfoWindow(content,opts);  // 创建信息窗口对象 
      map.openInfoWindow(infoWindow,point); //开启信息窗口
    }
    //站点连线
    var sy = new BMap.Symbol(BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW, {
      scale: 0.6,//图标缩放大小
      strokeColor:'#f00',//设置矢量图标的线填充颜色
      strokeWeight: '2',//设置线宽
    });
    var icons = new BMap.IconSequence(sy, '10', '30');
    var pois = [
      new BMap.Point(116.500855,39.874413),
      new BMap.Point(116.497405,39.912943),
      new BMap.Point(116.49798,39.913385),
      new BMap.Point(116.490506,39.950123),
      new BMap.Point(116.477858,39.977994),
      new BMap.Point(116.450837,39.993031),
      new BMap.Point(116.462335,40.022653),
    ];
    var polyline =new BMap.Polyline(pois, {
       enableEditing: false,//是否启用线编辑，默认为false
       enableClicking: true,//是否响应点击事件，默认为true
       icons:[icons],
       strokeWeight:'8',//折线的宽度，以像素为单位
       strokeOpacity: 0.8,//折线的透明度，取值范围0 - 1
      //  strokeColor:"#18a45b" //折线颜色
       strokeColor:"#0f0" //折线颜色
    });
    map.addOverlay(polyline);          //增加折线



  }

  render() {
    return (
      <PageHeaderWrapper>
        <Card bordered={false} >
          <div id="trainsit_map" style={{width: '100%', height: '500px'}}></div>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default Products;
