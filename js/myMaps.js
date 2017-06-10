/**
 * Created by lf on 2017/4/16.
 */

var map = new BMap.Map("baidumap");
var point = new BMap.Point(108.377915, 22.802547);
map.centerAndZoom(point, 17);
map.enableScrollWheelZoom(true);
//添加地图控件--导航控件
map.addControl(new BMap.NavigationControl());
//缩略图控件
map.addControl(new BMap.OverviewMapControl());
//比例尺控件
map.addControl(new BMap.ScaleControl());
//地图类型控件
map.addControl(new BMap.MapTypeControl());

//添加地图上的覆盖物(Overlay)——自定义标记
var icon = new BMap.Icon('images/rose.png', new BMap.Size(20, 15));
var marker = new BMap.Marker(point, {'icon': icon});
map.addOverlay(marker);
marker.setAnimation(BMAP_ANIMATION_BOUNCE);

//添加地图上的覆盖物(Overlay)——信息窗口
var param = {
    width: 20,
    height: 15,
    title: '青秀湖公园'
};
var w = new BMap.InfoWindow('青湖路', param);
map.openInfoWindow(w, point);