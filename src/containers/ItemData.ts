interface IListItem {
    title: string;
    price?: string;
    priceSale?: string;
    note?: string;
    imgSrc: string;
}

interface IItem {
    title: string;
    items: Array<IListItem>;
    lastItem: Array<IListItem>;
}

interface IBodyLeft {
    title: string;
    items: Array<IItem>;
    endImgSrc: string;
}

interface IFooterService {
    className: string;
    content: string;
}

/****************************************************************************************头部导航 */

export const ItemArr = ["小米手机", "Redmi 红米", "电视", "笔记本", "家电", "路由器", "智能硬件", "服务", "社区"];

export const ListItem: Array<Array<IListItem>> = [
    [
        { title: "小米11", price: "3999元起", imgSrc: "/assets/phone/phone-19.webp" },
        { title: "小米11至尊纪念版", price: "5299元起", imgSrc: "/assets/phone/phone-20.webp" },
        { title: "小米10", price: "3799元起", imgSrc: "/assets/phone/phone-21.webp" },
        { title: "小米10青春版 5G", price: "1999元起", imgSrc: "/assets/phone/phone-22.webp" },
        { title: "小米MIX Alpha", price: "19999元起", imgSrc: "/assets/phone/phone-23.webp" },
    ],
    [
        { title: "Redmi Node 9 系列", price: "999元起", imgSrc: "/assets/phone/phone-13.webp" },
        { title: "Redmi K30S 至尊纪念版", price: "2599元起", imgSrc: "/assets/phone/phone-14.webp" },
        { title: "Redmi K30 至尊纪念版", price: "1999元起", imgSrc: "/assets/phone/phone-15.webp" },
        { title: "Redmi 9A", price: "599元起", imgSrc: "/assets/phone/phone-16.webp" },
        { title: "Redmi K30 系列", price: "1299元起", imgSrc: "/assets/phone/phone-17.webp" },
        { title: "Redmi 10X", price: "999元起", imgSrc: "/assets/phone/phone-18.webp" },
    ],
    [
        { title: "小米电视大师 82英寸至尊纪念版", price: "49999元", imgSrc: "/assets/TV/tv-12.webp" },
        { title: "小米电视大师 82英寸", price: "9999元", imgSrc: "/assets/TV/tv-13.webp" },
        { title: "小米透明电视", price: "49999元", imgSrc: "/assets/TV/tv-14.webp" },
        { title: "小米电视 大师 65英寸OLED", price: "9999元", imgSrc: "/assets/TV/tv-15.webp" },
        { title: "Redmi 智能电视 MAX 98''", price: "19999元", imgSrc: "/assets/TV/tv-16.webp" },
        { title: "小米电视4A 60英寸", price: "2499元", imgSrc: "/assets/TV/tv-17.webp" },
    ],
    [
        { title: "Redmi G 游戏本", imgSrc: "/assets/computer/computer-13.webp" },
        { title: "RedmiBook 16", price: "4499元起", imgSrc: "/assets/computer/computer-14.webp" },
        { title: "RedmiBook 14 Ⅱ", price: "3199元起", imgSrc: "/assets/computer/computer-15.webp" },
        { title: "Pro 15.6'' 2020款", price: "5999元起", imgSrc: "/assets/computer/computer-16.png" },
        { title: "RedmiBook Air 13", price: "4499元起", imgSrc: "/assets/computer/computer-17.webp" },
        { title: "显示器", price: "2399元", imgSrc: "/assets/computer/computer-18.webp" },
    ],
    [
        { title: "米家互联网空调C1（一级能效）", price: "2399元", imgSrc: "/assets/home-machine/conditioner-1.webp" },
        { title: "米家互联网空调（一级能效）", price: "2399元", imgSrc: "/assets/home-machine/conditioner-2.png" },
        { title: "Redmi全自动波轮洗衣机1A", price: "799元", imgSrc: "/assets/home-machine/washing-1.jpg" },
        { title: "米家互联网洗烘一体机10kg", price: "1999元", imgSrc: "/assets/home-machine/washing-2.png" },
        { title: "米家风冷对开门冰箱 483L", price: "2288元", imgSrc: "/assets/home-machine/refrigerator-1.webp" },
        { title: "米家两门冰箱 160L", price: "899元", imgSrc: "/assets/home-machine/refrigerator-2.webp" },
    ],
    [
        { title: "小米路由器AX6000", price: "599元", imgSrc: "/assets/router/router-1.webp" },
        { title: "Redmi路由器 AX6", price: "329元", imgSrc: "/assets/router/router-2.webp" },
        { title: "Redmi路由器 AX5", price: "199元", imgSrc: "/assets/router/router-3.webp" },
        { title: "小米路由器 AX1800", price: "329元", imgSrc: "/assets/router/router-4.webp" },
        { title: "小米AIoT路由器AX3600", price: "499元", imgSrc: "/assets/router/router-5.webp" },
        { title: "Redmi路由器AC2100", price: "169元", imgSrc: "/assets/router/router-6.webp" },
    ],
    [
        { title: "小米全自动智能门锁", price: "1799元", imgSrc: "/assets/parts/door-clock.webp" },
        { title: "Redmi小爱触屏音箱Pro8", price: "499元", imgSrc: "/assets/parts/speaker.webp" },
        { title: "小米小爱触屏音箱", price: "199元", imgSrc: "/assets/parts/touch-speaker.jpg" },
        { title: "Redmi小爱音箱 Play", price: "79元", imgSrc: "/assets/parts/speaker-play.webp" },
        { title: "查看全部", imgSrc: "/assets/parts/watch.webp" },
    ],
];

/****************************************************************************************轮播图左边导航 */

export const NavCategory = ["手机 电话卡", "电视 盒子", "笔记本 显示器", "家电 插线板", "出行 穿戴", "智能 路由器", "电源 配件", "健康 儿童", "耳机 音箱", "生活 箱包"];

export const NavCategoryItem: Array<Array<IListItem>> = [
    [
        { title: "小米11", imgSrc: "/assets/phone/phone-1.webp" },
        { title: "小米10 至尊纪念版", imgSrc: "/assets/phone/phone-2.webp" },
        { title: "小米10", imgSrc: "/assets/phone/phone-3.webp" },
        { title: "小米10 青春版", imgSrc: "/assets/phone/phone-4.webp" },
        { title: "Redmi K30S 至尊纪念版", imgSrc: "/assets/phone/phone-5.webp" },
        { title: "小米云服务", imgSrc: "/assets/phone/cloud.jpg" },
        { title: "Redmi K30 Pro 变焦版", imgSrc: "/assets/phone/phone-6.webp" },
        { title: "Redmi K30 5G", imgSrc: "/assets/phone/phone-7.webp" },
        { title: "Redmi K30 至尊纪念版", imgSrc: "/assets/phone/phone-8.webp" },
        { title: "Redmi 10X Pro", imgSrc: "/assets/phone/phone-9.webp" },
        { title: "Redmi 10X 5G", imgSrc: "/assets/phone/phone-10.webp" },
        { title: "Redmi 10X 4G", imgSrc: "/assets/phone/phone-11.webp" },
        { title: "Redmi Note 9 Pro", imgSrc: "/assets/phone/phone-3.webp" },
        { title: "Redmi Note 9 5G", imgSrc: "/assets/phone/phone-3.webp" },
        { title: "Redmi Note 9  4G", imgSrc: "/assets/phone/phone-9.webp" },
        { title: "Redmi Note 8 Pro", imgSrc: "/assets/phone/phone-2.webp" },
        { title: "Redmi Note 8", imgSrc: "/assets/phone/phone-1.webp" },
        { title: "手机上门维修", imgSrc: "/assets/phone/service.png" },
        { title: "Redmi 9", imgSrc: "/assets/phone/phone-7.webp" },
        { title: "Redmi 9A", imgSrc: "/assets/phone/phone-4.webp" },
        { title: "Redmi 8", imgSrc: "/assets/phone/phone-11.webp" },
        { title: "Redmi 8A", imgSrc: "/assets/phone/phone-8.webp" },
        { title: "腾讯黑鲨游戏手机", imgSrc: "/assets/phone/phone-12.webp" },
        { title: "中国电信", imgSrc: "/assets/phone/telecom.jpg" },
    ],
    [
        { title: "小米透明电视", imgSrc: "/assets/TV/tv-1.webp" },
        { title: "小米电视5 Pro 55英寸", imgSrc: "/assets/TV/tv-2.jpg" },
        { title: "小米电视5 65英寸", imgSrc: "/assets/TV/tv-3.webp" },
        { title: "Redmi 智能电视 A系列", imgSrc: "/assets/TV/tv-4.jpg" },
        { title: "量子点电视", imgSrc: "/assets/TV/tv-5.webp" },
        { title: "Redmi 智能电视 X系列", imgSrc: "/assets/TV/tv-6.webp" },
        { title: "小米电视大师 82英寸", imgSrc: "/assets/TV/tv-7.webp" },
        { title: "小米电视5 Pro 65英寸", imgSrc: "/assets/TV/tv-8.webp" },
        { title: "小米电视5 55英寸", imgSrc: "/assets/TV/tv-9.webp" },
        { title: "小米全面屏电视E43K", imgSrc: "/assets/TV/tv-10.webp" },
        { title: "金属全面屏电视", imgSrc: "/assets/TV/tv-11.webp" },
        { title: "小米盒子", imgSrc: "/assets/TV/box.jpg" },
        { title: "大师电视 65英寸 OLED", imgSrc: "/assets/TV/tv-9.webp" },
        { title: "小米电视5 Pro 75英寸", imgSrc: "/assets/TV/tv-5.webp" },
        { title: "小米电视4A 60英寸", imgSrc: "/assets/TV/tv-3.webp" },
        { title: "Redmi 智能电视 X55", imgSrc: "/assets/TV/tv-2.jpg" },
        { title: "小米全面屏电视", imgSrc: "/assets/TV/tv-8.webp" },
        { title: "电视音箱", imgSrc: "/assets/TV/yinxiang.webp" },
        { title: "Redmi 智能电视 MAX 98''", imgSrc: "/assets/TV/tv-4.jpg" },
        { title: "小米电视5 75英寸", imgSrc: "/assets/TV/tv-11.webp" },
        { title: "小米电视4A 70英寸", imgSrc: "/assets/TV/tv-6.webp" },
        { title: "小米电视4S 75英寸", imgSrc: "/assets/TV/tv-9.webp" },
        { title: "小米壁画电视", imgSrc: "/assets/TV/tv-2.jpg" },
        { title: "激光投影电视", imgSrc: "/assets/TV/touying.webp" },
    ],
    [
        { title: "Redmi G 游戏本", imgSrc: "/assets/computer/computer-1.webp" },
        { title: "RedmiBook Air 13", imgSrc: "/assets/computer/computer-2.png" },
        { title: "RedmiBook 16", imgSrc: "/assets/computer/computer-3.webp" },
        { title: "RedmiBook 14", imgSrc: "/assets/computer/computer-4.webp" },
        { title: "小米笔记本Pro 15.6''", imgSrc: "/assets/computer/computer-5.jpg" },
        { title: "RedmiBook 13", imgSrc: "/assets/computer/computer-6.webp" },
        { title: "小米笔记本 Air 13.3''", imgSrc: "/assets/computer/computer-3.webp" },
        { title: "小米笔记本 Air 12.5''", imgSrc: "/assets/computer/computer-6.webp" },
        { title: "小米游戏本", imgSrc: "/assets/computer/computer-1.webp" },
        { title: "小米显示器34英寸", imgSrc: "/assets/computer/computer-10.webp" },
        { title: "小米显示器27英寸", imgSrc: "/assets/computer/computer-11.webp" },
        { title: "Redmi显示器23.8英寸", imgSrc: "/assets/computer/computer-12.webp" },
        { title: "键鼠套装", imgSrc: "/assets/computer/keyboard.webp" },
        { title: "鼠标", imgSrc: "/assets/computer/mouse.png" },
        { title: "转接器", imgSrc: "/assets/computer/adaptor.webp" },
    ],
    [
        { title: "冰箱", imgSrc: "/assets/home-machine/refrigerator.webp" },
        { title: "立式空调", imgSrc: "/assets/home-machine/floor-air-conditioner.png" },
        { title: "壁挂空调", imgSrc: "/assets/home-machine/wall-mount-air-conditioner.png" },
        { title: "滚筒洗衣机", imgSrc: "/assets/home-machine/washing-machine.png" },
        { title: "Redmi全自动波轮洗衣机", imgSrc: "/assets/home-machine/automatic-washing-machine.jpg" },
        { title: "净水器", imgSrc: "/assets/home-machine/water-purifier.jpg" },
        { title: "微波炉", imgSrc: "/assets/home-machine/microwave-oven.webp" },
        { title: "电烤箱", imgSrc: "/assets/home-machine/electric-oven.webp" },
        { title: "扫地机器人", imgSrc: "/assets/home-machine/floor-mopping-robot.jpg" },
        { title: "吸尘器", imgSrc: "/assets/home-machine/dust-collector.jpg" },
        { title: "空气净化器", imgSrc: "/assets/home-machine/air-purifier.jpg" },
        { title: "电饭煲", imgSrc: "/assets/home-machine/electric-cooker.jpg" },
        { title: "电磁炉", imgSrc: "/assets/home-machine/induction-cooker.jpg" },
        { title: "电水壶", imgSrc: "/assets/home-machine/electric-kettle.jpg" },
        { title: "滤水壶", imgSrc: "/assets/home-machine/kettle.jpg" },
        { title: "落地风扇", imgSrc: "/assets/home-machine/air.png" },
        { title: "投影仪", imgSrc: "/assets/home-machine/projector.png" },
        { title: "灯具", imgSrc: "/assets/home-machine/light.jpg" },
        { title: "插线板", imgSrc: "/assets/home-machine/socket.jpg" },
        { title: "新风机", imgSrc: "/assets/home-machine/fresh-air.jpg" },
        { title: "电暖器", imgSrc: "/assets/home-machine/electric-heater.jpg" },
        { title: "电压力锅", imgSrc: "/assets/home-machine/pressure-cooker.jpg" },
        { title: "料理机", imgSrc: "/assets/home-machine/food-processer.jpg" },
    ],
    [
        { title: "Redmi 手表", imgSrc: "/assets/trip/redmi-watches.webp" },
        { title: "手环5NFC", imgSrc: "/assets/trip/watch-5NFC.webp" },
        { title: "手环5", imgSrc: "/assets/trip/watches-5.webp" },
        { title: "小米手表", imgSrc: "/assets/trip/mi-watches.webp" },
        { title: "VR", imgSrc: "/assets/trip/vr.jpg" },
        { title: "平衡车", imgSrc: "/assets/trip/balance-car.jpg" },
        { title: "自行车", imgSrc: "/assets/trip/bike.webp" },
        { title: "滑板车", imgSrc: "/assets/trip/scooter.jpg" },
        { title: "车载充电器", imgSrc: "/assets/trip/car-charger.webp" },
        { title: "平衡车配件", imgSrc: "/assets/trip/balance-car-parts.jpg" },
        { title: "智能后视镜", imgSrc: "/assets/trip/recording-instrument.jpg" },
        { title: "智能记录仪", imgSrc: "/assets/trip/rearview-mirror.jpg" },
        { title: "无线车充", imgSrc: "/assets/trip/wireless-adaptor.jpg" },
        { title: "充气宝", imgSrc: "/assets/trip/power-bank.jpg" },
        { title: "石英表", imgSrc: "/assets/trip/quartz-watch.webp" },
    ],
    [
        { title: "打印机", imgSrc: "/assets/intelligenent/printer.jpg" },
        { title: "喷墨打印机", imgSrc: "/assets/intelligenent/inkjet-printer.webp" },
        { title: "喷墨打印机墨水", imgSrc: "/assets/intelligenent/printer-ink.webp" },
        { title: "小米路由器", imgSrc: "/assets/intelligenent/mi-router.webp" },
        { title: "智能家庭", imgSrc: "/assets/intelligenent/home.webp" },
        { title: "对讲机", imgSrc: "/assets/intelligenent/interphone.jpg" },
        { title: "摄像机", imgSrc: "/assets/intelligenent/camera.jpg" },
        { title: "照相机", imgSrc: "/assets/intelligenent/camera-2.jpg" },
        { title: "智能门锁", imgSrc: "/assets/intelligenent/door-clock.jpg" },
        { title: "视频门铃", imgSrc: "/assets/intelligenent/doorbell.jpg" },
        { title: "小爱老师", imgSrc: "/assets/intelligenent/teacher.png" },
        { title: "Redmi路由器", imgSrc: "/assets/intelligenent/redmi-router.webp" },
        { title: "小爱音箱", imgSrc: "/assets/intelligenent/sound.jpg" },
        { title: "云服务空间年卡", imgSrc: "/assets/intelligenent/cloud.webp" },
        { title: "云服务空间月卡", imgSrc: "/assets/intelligenent/cloud.webp" },
    ],
    [
        { title: "移动电源", imgSrc: "/assets/parts/power.webp" },
        { title: "数据线", imgSrc: "/assets/parts/cable.jpg" },
        { title: "车充", imgSrc: "/assets/parts/car-charger.jpg" },
        { title: "充电器", imgSrc: "/assets/parts/adaptor.webp" },
        { title: "电池", imgSrc: "/assets/parts/pin.jpg" },
        { title: "自拍杆", imgSrc: "/assets/parts/stick.jpg" },
        { title: "手机壳", imgSrc: "/assets/parts/phone-shell.jpg" },
        { title: "手机贴膜", imgSrc: "/assets/parts/screen.jpg" },
        { title: "无线充电器", imgSrc: "/assets/parts/wireless-adaptor.webp" },
        { title: "平板配件", imgSrc: "/assets/parts/slab.jpg" },
        { title: "黑鲨配件", imgSrc: "/assets/parts/shark.jpg" },
        { title: "其他配件", imgSrc: "/assets/parts/orther.jpg" },
    ],
    [
        { title: "洗手机", imgSrc: "/assets/health/washing-hand.jpg" },
        { title: "修剪器", imgSrc: "/assets/health/clipping-machine.webp" },
        { title: "剃须刀", imgSrc: "/assets/health/shaver.jpg" },
        { title: "牙刷", imgSrc: "/assets/health/toothbrush.jpg" },
        { title: "吹风机", imgSrc: "/assets/health/hair-dryer.jpg" },
        { title: "体重秤", imgSrc: "/assets/health/scales.png" },
        { title: "体脂秤", imgSrc: "/assets/health/body-fat-scales.jpg" },
        { title: "早教启智", imgSrc: "/assets/health/teacher.jpg" },
        { title: "遥控电动", imgSrc: "/assets/health/remote.jpg" },
        { title: "益智积木", imgSrc: "/assets/health/toy.jpg" },
        { title: "儿童手表", imgSrc: "/assets/health/child-watch.jpg" },
        { title: "儿童滑板车", imgSrc: "/assets/health/child-scooter.jpg" },
        { title: "婴儿推车", imgSrc: "/assets/health/car.jpg" },
        { title: "儿童书包", imgSrc: "/assets/health/child-bag.jpg" },
        { title: "健身车", imgSrc: "/assets/health/fitness-car.webp" },
        { title: "走步机", imgSrc: "/assets/health/walk.jpg" },
    ],
    [
        { title: "小爱音箱 Art 电池版", imgSrc: "/assets/headset/speaker-Art.webp" },
        { title: "小爱触屏音箱Pro 8", imgSrc: "/assets/headset/tounch-speaker-pro-8.webp" },
        { title: "Redmi小爱触屏音箱 8", imgSrc: "/assets/headset/speaker-8.webp" },
        { title: "小爱音箱 Pro ", imgSrc: "/assets/headset/speaker-pro.webp" },
        { title: "小米小爱音箱", imgSrc: "/assets/headset/speaker.webp" },
        { title: "小米小爱触屏音箱", imgSrc: "/assets/headset/touch-speaker.jpg" },
        { title: "Redmi音箱", imgSrc: "/assets/headset/redmi-speaker.webp" },
        { title: "小米小爱音箱 Play", imgSrc: "/assets/headset/sound-play.jpg" },
        { title: "线控耳机", imgSrc: "/assets/headset/headset-cable.jpg" },
        { title: "蓝牙耳机", imgSrc: "/assets/headset/blutooth-headset.webp" },
        { title: "头戴耳机", imgSrc: "/assets/headset/headset.jpg" },
        { title: "品牌耳机", imgSrc: "/assets/headset/brand-headset.jpg" },
        { title: "蓝牙音箱", imgSrc: "/assets/headset/blutooth-speaker.webp" },
        { title: "小米AI音箱", imgSrc: "/assets/headset/AI-speaker.jpg" },
        { title: "小米小爱音箱HD", imgSrc: "/assets/headset/speaker-HD.jpg" },
        { title: "k歌耳机", imgSrc: "/assets/headset/karaoke-headset.jpg" },
    ],
    [
        { title: "小背包", imgSrc: "/assets/life/small-bag.webp" },
        { title: "双肩包 ", imgSrc: "/assets/life/backpack.jpg" },
        { title: "胸包", imgSrc: "/assets/life/chest-bag.webp" },
        { title: "旅行箱 ", imgSrc: "/assets/life/suitcase.webp" },
        { title: "运动鞋", imgSrc: "/assets/life/shoe.jpg" },
        { title: "眼镜", imgSrc: "/assets/life/eye-glasses.jpg" },
        { title: "床垫", imgSrc: "/assets/life/mattess.jpg" },
        { title: "枕头", imgSrc: "/assets/life/pillow.png" },
        { title: "饰品", imgSrc: "/assets/life/ornament.webp" },
        { title: "螺丝刀", imgSrc: "/assets/life/screwdriver.jpg" },
        { title: "保温杯", imgSrc: "/assets/life/vacuum-cup.jpg" },
        { title: "驱蚊器", imgSrc: "/assets/life/mosquito-dispeller.jpg" },
        { title: "毛巾/浴巾", imgSrc: "/assets/life/towel.jpg" },
        { title: "米兔", imgSrc: "/assets/life/rabbit.webp" },
        { title: "笔", imgSrc: "/assets/life/pen.jpg" },
    ],
];

export const Support: Array<IListItem> = [
    { title: "小米秒杀", imgSrc: "/assets/banner/clock.png" },
    { title: "企业团购", imgSrc: "/assets/banner/h.png" },
    { title: "F码通道", imgSrc: "/assets/banner/f.png" },
    { title: "米粉卡", imgSrc: "/assets/banner/card.png" },
    { title: "以旧换新", imgSrc: "/assets/banner/y.png" },
    { title: "话费充值", imgSrc: "/assets/banner/y-2.png" },
];

/**************************************************************************************** 小米秒杀 */

export const CarouselItem: Array<IListItem> = [
    { title: "小米盒子4 SE套装版", price: "149", priceSale: "189元", note: "人工智能机顶盒+小米高清数据线", imgSrc: "/assets/miaosha/router.webp" },
    { title: "米家扫拖机器人1C 白色", price: "1199", priceSale: "1299元", note: "能扫能拖，地面清洁交给我", imgSrc: "/assets/miaosha/clear.webp" },
    { title: "日常元素抽纸 青春版 24包/箱", price: "27.9", priceSale: "32.9元", note: "精选原生竹浆，健康环保", imgSrc: "/assets/miaosha/paper.webp" },
    { title: "小米全面屏电视43英寸 E43K 黑色 43英寸", price: "1299", priceSale: "1399元", note: "全面屏设计，海量内容", imgSrc: "/assets/miaosha/tv-3.webp" },
    { title: "RedmiBook 13 i5 8G 512G SSD MX250 2G 银", price: "3999", priceSale: "4799元", note: "让高性能全面展现", imgSrc: "/assets/miaosha/laptop-2.webp" },
    { title: "小米经典商务双肩包 2 黑色", price: "79", priceSale: "99元", note: "实用商务时尚范 经典设计 空间利用率高", imgSrc: "/assets/miaosha/bag.webp" },
    { title: "Redmi智能电视A55 黑色 55英寸", price: "2099", priceSale: "2199元", note: "澎湃音效影院级体验", imgSrc: "/assets/miaosha/tv-1.webp" },
    { title: "小米智能门锁 霸王锁体 碳素黑", price: "1399", priceSale: "1599元", note: "一体化活体指纹识别，多种开锁方式", imgSrc: "/assets/miaosha/clock.webp" },
    { title: "米兔儿童学习手表4 粉色", price: "799", priceSale: "899元", note: "8天超长待机，AI双摄高清视频通话", imgSrc: "/assets/miaosha/watch.webp" },
    { title: "九号平衡车 Plus 白色", price: "2999", priceSale: "3499元", note: "一个形影不离的新伙伴", imgSrc: "/assets/miaosha/bike.png" },
    { title: "米家滚筒洗烘一体机1A 8kg 白色", price: "1599", priceSale: "1999元", note: "智能烘干，即洗即穿", imgSrc: "/assets/miaosha/washing-machine.webp" },
    { title: "RedmiBook Air 13 I5/16G/512G/2.5K100%sRGB 灰色", price: "4799", priceSale: "5199元", note: "轻盈便携 | 轻松办公", imgSrc: "/assets/miaosha/laptop-1.webp" },
    { title: "小米米家电动滑板车1S 白色", price: "1899", priceSale: "1999元", note: "型出格，行出色", imgSrc: "/assets/miaosha/scooter.webp" },
    { title: "米家激光投影电视 1S 4K 黑色", price: "10999", priceSale: "14999元", note: "4K 画面，视觉感官盛宴", imgSrc: "/assets/miaosha/touying.webp" },
    { title: "PINZTEA木柄陶瓷泡茶杯 茶水分离 380mL", price: "69", priceSale: "99元", note: "尊贵高级黑/实木防烫柄/轻松清洗/精致礼盒装", imgSrc: "/assets/miaosha/kettle.webp" },
    { title: "silencare无言智能云空气炸锅 白色", price: "249", priceSale: "499元", note: "米家APP无线智控，海量云菜谱", imgSrc: "/assets/miaosha/cafe.webp" },
];

/****************************************************************************************   手机 */

export const PhoneList: Array<IListItem> = [
    { title: "小米11", price: "3999元起", note: "骁龙888 | 2K四曲面屏", imgSrc: "/assets/phone/phone-24.webp" },
    { title: "Note 9 Pro", price: "1599元起", note: "能一亿像素夜景相机，120Hz六档变速高刷屏", imgSrc: "/assets/phone/phone-25.webp" },
    { title: "Note 9", price: "1299元起", note: "天玑 800U处理器，5000mAh电池，", imgSrc: "/assets/phone/phone-26.webp" },
    { title: "Note 9 4G", price: "999元起", note: "6000mAh长续航", imgSrc: "/assets/phone/phone-27.webp" },
    { title: "小米10 至尊版", price: "5299元起", note: "120X 变焦/120W秒充/120Hz屏幕", imgSrc: "/assets/phone/phone-28.webp" },
    { title: "Redmi K30S 至尊纪念版", price: "2599元起", note: "144Hz[7档]变速高刷屏", imgSrc: "/assets/phone/phone-29.webp" },
    { title: "Redmi K30 至尊版", price: "1999元起", note: "120Hz弹出全面屏，天玑1000+旗舰处理器", imgSrc: "/assets/phone/phone-30.webp" },
    { title: "腾讯黑鲨3S ", price: "3999元起", note: "骁龙865处理器，120Hz刷新率", imgSrc: "/assets/phone/phone-31.webp" },
];

/****************************************************************************************body-剩下 */

export const BodyLeft: Array<IBodyLeft> = [
    {
        title: "家电",
        items: [
            {
                title: "热门",
                items: [
                    { title: "", price: "", imgSrc: "/assets/body-home-machine/banner-1.webp" },
                    { title: "小米全面屏电视65英寸 E65X", price: "2899", priceSale: "3099", note: "全面屏设计", imgSrc: "/assets/body-home-machine/hot/img-2.webp" },
                    { title: "全面屏电视E43K", price: "1299", priceSale: "1399", note: "全面屏设计，海量内容", imgSrc: "/assets/body-home-machine/hot/img-3.webp" },
                    { title: "小米电视4A 70英寸", price: "3299", priceSale: "3999", note: "大屏更享受", imgSrc: "/assets/body-home-machine/hot/img-4.webp" },
                    { title: "米家空调", price: "1499", priceSale: "1799", note: "出众静音，快速制冷热", imgSrc: "/assets/body-home-machine/hot/img-5.jpg" },
                    { title: "", price: "", imgSrc: "/assets/body-home-machine/banner-2.webp" },
                    {
                        title: "米家互联网洗烘一体机 Pro 10kg",
                        price: "2899",
                        priceSale: "3299",
                        note: "智能洗烘，省心省力",
                        imgSrc: "/assets/body-home-machine/hot/img-6.webp",
                    },
                    { title: "Redmi全自动波轮洗衣机1A 8kg ", price: "799", priceSale: "899", note: "一键操作，父母都爱用", imgSrc: "/assets/body-home-machine/hot/img-7.webp" },
                    { title: "Air 13.3'' 2019款", price: "4799", priceSale: "5399", note: "新一代独立显卡", imgSrc: "/assets/body-home-machine/hot/img-8.webp" },
                ],
                lastItem: [
                    { title: "米家互联网烟灶套装（天然气） ", price: "2298", imgSrc: "/assets/body-home-machine/hot/img-9.webp" },
                    { title: "浏览更多 ", price: "", note: "热门", imgSrc: "" },
                ],
            },
            {
                title: "电视影音",
                items: [
                    { title: "", price: "", imgSrc: "/assets/body-home-machine/banner-1.webp" },
                    { title: "全面屏电视E43K", price: "1299", priceSale: "1399", note: "全面屏设计，海量内容", imgSrc: "/assets/body-home-machine/tv/img-1.webp" },
                    { title: "全面屏电视 55英寸E55X", price: "2199", priceSale: "2399", note: "潮流全面屏设计", imgSrc: "/assets/body-home-machine/tv/img-2.webp" },
                    { title: "小米电视4A 60英寸", price: "2499", note: "人工智能语音系统,超高清画质", imgSrc: "/assets/body-home-machine/tv/img-3.webp" },
                    { title: "小米电视4S 75英寸", price: "4399", priceSale: "5999", note: "4K HDR，人工智能语音", imgSrc: "/assets/body-home-machine/tv/img-4.jpg" },
                    { title: "", price: "", imgSrc: "/assets/body-home-machine/banner-2.webp" },
                    { title: "小米全面屏电视65英寸 E65X", price: "2899", priceSale: "3099", note: "全面屏设计", imgSrc: "/assets/body-home-machine/tv/img-5.webp" },
                    { title: "小米全面屏电视E32C", price: "799", priceSale: "999", note: "全面屏设计，人工智能系统", imgSrc: "/assets/body-home-machine/tv/img-6.webp" },
                    { title: "Redmi智能电视A55", price: "2099", priceSale: "2199", note: "澎湃音效影院级体验", imgSrc: "/assets/body-home-machine/tv/img-7.webp" },
                ],
                lastItem: [
                    { title: "Redmi 智能电视 MAX 98''", price: "19999", imgSrc: "/assets/body-home-machine/tv/img-8.webp" },
                    { title: "浏览更多 ", price: "", note: "电视影音", imgSrc: "" },
                ],
            },
        ],
        endImgSrc: "/assets/body-home-machine/banner-3.webp",
    },
    {
        title: "智能",
        items: [
            {
                title: "热门",
                items: [
                    { title: "", price: "", imgSrc: "/assets/body-intelligenent/banner-1.webp" },
                    { title: "小米小爱音箱 Play", price: "99", priceSale: "169", note: "听音乐、语音遥控家电", imgSrc: "/assets/body-intelligenent/hot/img-1.webp" },
                    { title: "米家智能窗帘", price: "799", note: "窗帘开合随心控", imgSrc: "/assets/body-intelligenent/hot/img-2.webp" },
                    { title: "小米体脂秤2", price: "99", note: "轻松掌握身体脂肪率", imgSrc: "/assets/body-intelligenent/hot/img-3.webp" },
                    { title: "九号平衡车", price: "1999", note: "年轻人的酷玩具", imgSrc: "/assets/body-intelligenent/hot/img-4.jpg" },
                    { title: "", price: "", imgSrc: "/assets/body-intelligenent/banner-2.webp" },
                    {
                        title: "小米智能门锁 推拉式",
                        price: "1599",
                        priceSale: "1699",
                        note: "一步推拉，高端智能门锁",
                        imgSrc: "/assets/body-intelligenent/hot/img-5.webp",
                    },
                    { title: "Redmi小爱触屏音箱 8英寸", price: "349", note: "超大屏，让智能更多可能", imgSrc: "/assets/body-intelligenent/hot/img-6.webp" },
                    { title: "小米手环5", price: "179", priceSale: "189", note: "11种运动模式 磁吸式充电", imgSrc: "/assets/body-intelligenent/hot/img-7.webp" },
                ],
                lastItem: [
                    { title: "米家空气净化器Pro", price: "1299", imgSrc: "/assets/body-intelligenent/hot/img-8.webp" },
                    { title: "浏览更多 ", price: "", note: "热门", imgSrc: "" },
                ],
            },
            {
                title: "安防",
                items: [
                    { title: "", price: "", imgSrc: "/assets/body-intelligenent/banner-1.webp" },
                    { title: "米家智能门锁 标准锁体 碳素黑", price: "1299", note: "一体化活体指纹识别，多种开锁方式", imgSrc: "/assets/body-intelligenent/security/img-1.webp" },
                    {
                        title: "米家智能门锁 标准锁体 磨砂金",
                        price: "1299",
                        priceSale: "1499",
                        note: "全新磨砂金配色，精湛工艺升级",
                        imgSrc: "/assets/body-intelligenent/security/img-2.webp",
                    },
                    {
                        title: "米家智能门锁 推拉式 通用版",
                        price: "1599",
                        priceSale: "1699",
                        note: "一步推拉，高端智能门锁",
                        imgSrc: "/assets/body-intelligenent/security/img-3.webp",
                    },
                    {
                        title: "米家智能门锁 青春版",
                        price: "949",
                        priceSale: "999",
                        note: "隐形指纹识别设计 简单一步快进家门",
                        imgSrc: "/assets/body-intelligenent/security/img-4.webp",
                    },
                    { title: "", price: "", imgSrc: "/assets/body-intelligenent/banner-2.webp" },
                    {
                        title: "米家智能门锁 霸王锁体 碳素黑",
                        price: "1399",
                        priceSale: "1599",
                        note: "一体化活体指纹识别，多种开锁方式",
                        imgSrc: "/assets/body-intelligenent/security/img-5.webp",
                    },
                    {
                        title: "米家智能门锁 霸王锁体 磨砂金",
                        price: "1399",
                        priceSale: "1799",
                        note: "适配霸王锁体，多种开锁方式",
                        imgSrc: "/assets/body-intelligenent/security/img-6.webp",
                    },
                ],
                lastItem: [{ title: "浏览更多 ", price: "", note: "安防", imgSrc: "" }],
            },
            {
                title: "出行",
                items: [
                    { title: "", price: "", imgSrc: "/assets/body-intelligenent/banner-1.webp" },
                    { title: "米兔折叠婴儿推车", price: "699", note: "出发去向往的地方", imgSrc: "/assets/body-intelligenent/trip/img-1.jpg" },
                    { title: "九号平衡车 Plus", price: "3299", priceSale: "3499", note: "一个形影不离的新伙伴", imgSrc: "/assets/body-intelligenent/trip/img-2.png" },
                    { title: "米家充气宝", price: "199", note: "便携电动打气筒", imgSrc: "/assets/body-intelligenent/trip/img-3.webp" },
                    { title: "小米小背包", price: "29", note: "城市休闲，简约设计", imgSrc: "/assets/body-intelligenent/trip/img-4.webp" },
                    { title: "", price: "", imgSrc: "/assets/body-intelligenent/banner-2.webp" },
                    {
                        title: "骑记电动助力自行车 新国标版 黑色",
                        price: "2999",
                        note: "更多助力选择，更多城市风景",
                        imgSrc: "/assets/body-intelligenent/trip/img-5.webp",
                    },
                    { title: "小米米家对讲机2", price: "499", note: "向更远出发", imgSrc: "/assets/body-intelligenent/trip/img-6.webp" },
                    { title: "九号平衡车", price: "1999", note: "年轻人的酷玩具", imgSrc: "/assets/body-intelligenent/trip/img-7.jpg" },
                ],
                lastItem: [
                    { title: "米家电动滑板车1S", price: "1999", imgSrc: "/assets/body-intelligenent/trip/img-8.webp" },
                    { title: "浏览更多 ", price: "", note: "出行", imgSrc: "" },
                ],
            },
        ],
        endImgSrc: "/assets/body-intelligenent/banner-3.webp",
    },
    {
        title: "搭配",
        items: [
            {
                title: "热门",
                items: [
                    { title: "", price: "", imgSrc: "/assets/body-dabei/banner-1.webp" },
                    { title: "小米真无线蓝牙耳机Air 2 Pro", price: "679", priceSale: "699", note: "主动降噪/持久续航/无线充", imgSrc: "/assets/body-dabei/hot/img-1.webp" },
                    { title: "高速无线充套装", price: "149", note: "快速无线闪充，Qi充电标准", imgSrc: "/assets/body-dabei/hot/img-2.webp" },
                    { title: "Redmi AirDots 2真无线蓝牙耳机", price: "99", note: "支持蓝牙5.0，自动秒连，拿起就能用", imgSrc: "/assets/body-dabei/hot/img-3.webp" },
                    { title: "小米真无线蓝牙耳机Air 2s", price: "369", priceSale: "399", note: "全面升级，智慧真无线", imgSrc: "/assets/body-dabei/hot/img-4.webp" },
                    { title: "", price: "", imgSrc: "/assets/body-dabei/banner-2.webp" },
                    {
                        title: "Redmi充电宝 10000mAh 标准版 白色",
                        price: "59",
                        note: "10000mAh大电量",
                        imgSrc: "/assets/body-dabei/hot/img-5.webp",
                    },
                    { title: "Redmi充电宝 20000mAh 快充版", price: "99", note: "大容量，	可上飞机", imgSrc: "/assets/body-dabei/hot/img-6.webp" },
                    { title: "小米插线板 5孔位", price: "39", note: "多重安全保护", imgSrc: "/assets/body-dabei/hot/img-7.jpg" },
                ],
                lastItem: [
                    { title: "小米蓝牙耳机AirDots青春版", price: "169", imgSrc: "/assets/body-dabei/hot/img-8.jpg" },
                    { title: "浏览更多 ", price: "", note: "热门", imgSrc: "" },
                ],
            },
            {
                title: "耳机音箱",
                items: [
                    { title: "", price: "", imgSrc: "/assets/body-dabei/banner-1.webp" },
                    { title: "Redmi AirDots 2真无线蓝牙耳机", price: "99", note: "支持蓝牙5.0，自动秒连，拿起就能用", imgSrc: "/assets/body-dabei/speaker/img-1.webp" },
                    { title: "小米真无线蓝牙耳机Air 2s", price: "369", priceSale: "399", note: "全面升级，智慧真无线", imgSrc: "/assets/body-dabei/speaker/img-2.webp" },
                    { title: "小米降噪项圈蓝牙耳机", price: "399", priceSale: "499", note: "无线降噪，静无止境", imgSrc: "/assets/body-dabei/speaker/img-3.webp" },
                    { title: "小米小爱音箱 Pro", price: "299", note: "语音遥控5000+品牌主流家电", imgSrc: "/assets/body-dabei/speaker/img-4.webp" },
                    { title: "", price: "", imgSrc: "/assets/body-dabei/banner-2.webp" },
                    {
                        title: "小米小爱音箱 Art 电池版",
                        price: "399",
                        note: "不插电，让音乐更自由",
                        imgSrc: "/assets/body-dabei/speaker/img-5.webp",
                    },
                    { title: "小米小爱音箱 Art", price: "399", note: "极光下的声音艺术", imgSrc: "/assets/body-dabei/speaker/img-6.webp" },
                    { title: "小米小爱音箱", price: "249", priceSale: "269", note: "全面升级 旗舰音质", imgSrc: "/assets/body-dabei/speaker/img-7.webp" },
                ],
                lastItem: [
                    { title: "小米AI音箱", price: "199", imgSrc: "/assets/body-dabei/speaker/img-8.jpg" },
                    { title: "浏览更多 ", price: "", note: "耳机音箱", imgSrc: "" },
                ],
            },
        ],
        endImgSrc: "/assets/body-dabei/banner-3.webp",
    },
    {
        title: "配件",
        items: [
            {
                title: "热门",
                items: [
                    { title: "", price: "", imgSrc: "/assets/body-parts/banner-1.webp" },
                    { title: "小米氮化镓GaN充电器 Type-C 65W", price: "149", note: "氮化镓黑科技 65W MAX 大功率快充", imgSrc: "/assets/body-parts/hot/img-1.webp" },
                    { title: "高速无线充套装", price: "149", note: "快速无线闪充，Qi充电标准", imgSrc: "/assets/body-parts/hot/img-2.webp" },
                    { title: "小米无线充电宝青春版10000mAh", price: "129", note: "能量满满，无线有线都能充", imgSrc: "/assets/body-parts/hot/img-3.webp" },
                    { title: "小米车载充电器快充版", price: "69", note: "双口快充，安全稳定", imgSrc: "/assets/body-parts/hot/img-4.webp" },
                    { title: "", price: "", imgSrc: "/assets/body-parts/banner-2.webp" },
                    {
                        title: "小米USB充电器65W 快充版（2A1C）",
                        price: "149",
                        note: "超级快充，三台设备同时充",
                        imgSrc: "/assets/body-parts/hot/img-5.webp",
                    },
                    { title: "小米Type-C转Lightning数据线 1m", price: "59", note: "苹果MFi官方认证，支持快充", imgSrc: "/assets/body-parts/hot/img-6.webp" },
                    { title: "小米车载充电器快充版1A1C 100W", price: "", note: "小米车载充电器快充版1A1C 100W", imgSrc: "/assets/body-parts/hot/img-7.webp" },
                ],
                lastItem: [
                    { title: "小米氮化镓GaN充电器 Type-C 65W", price: "149", imgSrc: "/assets/body-parts/hot/img-8.webp" },
                    { title: "浏览更多 ", price: "", note: "热门", imgSrc: "" },
                ],
            },
            {
                title: "充电器",
                items: [
                    { title: "", price: "", imgSrc: "/assets/body-parts/banner-1.webp" },
                    { title: "小米氮化镓GaN充电器 Type-C 65W", price: "149", note: "氮化镓黑科技 65W MAX 大功率快充", imgSrc: "/assets/body-parts/adaptors/img-1.webp" },
                    { title: "小米立式风冷无线充 30W", price: "199", note: "解锁充电新姿势", imgSrc: "/assets/body-parts/adaptors/img-2.webp" },
                    { title: "小米立式无线充电器 通用快充20W", price: "99", note: "横竖可充，迅速感应边充边玩", imgSrc: "/assets/body-parts/adaptors/img-3.webp" },
                    { title: "米家智能插座蓝牙网关版", price: "79", note: "让传统家电变智能", imgSrc: "/assets/body-parts/adaptors/img-4.webp" },
                    { title: "", price: "", imgSrc: "/assets/body-parts/banner-2.webp" },
                    {
                        title: "米家插线板6位基础版（含3口USB 2A快充）",
                        price: "79",
                        note: "小巧设计，便捷不占地儿",
                        imgSrc: "/assets/body-parts/adaptors/img-5.jpg",
                    },
                    { title: "小米插线板（含3口USB 2A快充）", price: "49", note: "3个USB充电口，支持快充", imgSrc: "/assets/body-parts/adaptors/img-6.jpg" },
                    { title: "小米USB充电器65W 快充版（2A1C）", price: "149", note: "超级快充，三台设备同时充", imgSrc: "/assets/body-parts/adaptors/img-7.webp" },
                ],
                lastItem: [
                    { title: "小米Type-C充电器快充版 20W", price: "39", imgSrc: "/assets/body-parts/adaptors/img-8.webp" },
                    { title: "浏览更多 ", price: "", note: "充电器", imgSrc: "" },
                ],
            },
        ],
        endImgSrc: "/assets/body-parts/banner-3.webp",
    },
    {
        title: "周边",
        items: [
            {
                title: "热门",
                items: [
                    { title: "", price: "", imgSrc: "/assets/body-zhoubian/banner-1.webp" },
                    { title: "米家飞行员太阳镜 Pro", price: "199", note: "尼龙偏光，轻巧佩戴", imgSrc: "/assets/body-zhoubian/hot/img-1.webp" },
                    { title: "小米巨能写中性笔10支装", price: "9.99", note: "一支顶4支，超长顺滑书写", imgSrc: "/assets/body-zhoubian/hot/img-2.webp" },
                    { title: "米家迷你保温杯", price: "49", note: "可以随身携带的温度", imgSrc: "/assets/body-zhoubian/hot/img-3.webp" },
                    { title: "贝医生巴氏牙刷 四色装", price: "39.9", note: "进口刷毛，好品质", imgSrc: "/assets/body-zhoubian/hot/img-4.jpg" },
                    { title: "", price: "", imgSrc: "/assets/body-zhoubian/banner-2.webp" },
                    {
                        title: "米家运动鞋4",
                        price: "199",
                        note: "轻盈若絮,弹若脱兔",
                        imgSrc: "/assets/body-zhoubian/hot/img-5.webp",
                    },
                    { title: "米家指甲刀五件套", price: "39.9", note: "轻巧多用，优雅随行", imgSrc: "/assets/body-zhoubian/hot/img-6.webp" },
                    { title: "8H乳胶床垫2", price: "499", priceSale: "599", note: "软硬双面可睡", imgSrc: "/assets/body-zhoubian/hot/img-7.webp" },
                ],
                lastItem: [
                    { title: "MIJOY 唱片机车载香薰", price: "49", imgSrc: "/assets/body-zhoubian/hot/img-8.webp" },
                    { title: "浏览更多 ", price: "", note: "热门", imgSrc: "" },
                ],
            },
            {
                title: "出行",
                items: [
                    { title: "", price: "", imgSrc: "/assets/body-zhoubian/banner-1.webp" },
                    { title: "九号卡丁车Pro兰博基尼汽车定制版", price: "9999", note: "九号卡丁车Pro兰博基尼汽车定制版", imgSrc: "/assets/body-zhoubian/trips/img-1.webp" },
                    { title: "米家飞行员太阳镜 Pro", price: "199", note: "尼龙偏光，轻巧佩戴", imgSrc: "/assets/body-zhoubian/trips/img-2.webp" },
                    { title: "九号平衡车", price: "1999", note: "年轻人的酷玩具", imgSrc: "/assets/body-zhoubian/trips/img-3.jpg" },
                    { title: "小米米家电动滑板车Pro", price: "2799", note: "性能提升，动力更强劲", imgSrc: "/assets/body-zhoubian/trips/img-4.webp" },
                    { title: "", price: "", imgSrc: "/assets/body-zhoubian/banner-2.webp" },
                    {
                        title: "米家经典方框太阳镜",
                        price: "99",
                        note: "复古设计，偏光自修复",
                        imgSrc: "/assets/body-zhoubian/trips/img-5.webp",
                    },
                    { title: "小米车载充电器快充版1A1C 100W", price: "99", note: "小米车载充电器快充版1A1C 100W", imgSrc: "/assets/body-zhoubian/trips/img-6.webp" },
                    { title: "小米对讲机Lite", price: "129", note: "小米对讲机Lite", imgSrc: "/assets/body-zhoubian/trips/img-7.webp" },
                ],
                lastItem: [
                    { title: "小米无线充电宝30W 10000mAh", price: "199", imgSrc: "/assets/body-zhoubian/trips/img-8.webp" },
                    { title: "浏览更多 ", price: "", note: "出行", imgSrc: "" },
                ],
            },
        ],
        endImgSrc: "/assets/body-zhoubian/banner-3.webp",
    },
];

/****************************************************************************************footer */

export const FooterService: Array<IFooterService> = [
    { className: "icon-tool", content: "预约维修服务" },
    { className: "icon-7", content: "7天无理由退货" },
    { className: "icon-15", content: "15天免费换货" },
    { className: "icon-gift", content: "满99元包邮" },
    { className: "icon-location", content: "520余家售后网点" },
];

/****************************************************************************************footer-support */

export const FooterSupport: Array<Array<string>> = [
    ["帮助中心", "账户管理", "购物指南", "订单操作"],
    ["服务支持", "售后政策", "自助服务", "相关下载"],
    ["线下门店", "小米之家", "服务网点", "授权体验店"],
    ["关于小米", "了解小米", "加入小米", "投资者关系", "企业社会责任", "廉洁举报"],
    ["关注我们", "新浪微博", "官方微信", "联系我们", "公益基金会"],
    ["特色服务", "F 码通道", "礼物码", "防伪查询"],
];

export const FooterSiteInfo: Array<string> = [
    "小米商城",
    "MIUI",
    "米家",
    "米聊",
    "多看",
    "游戏",
    "政企服务",
    "小米天猫店",
    "小米集团隐私政策",
    "小米公司儿童信息保护规则",
    "小米商城隐私政策",
    "小米商城用户协议",
    "问题反馈",
    "Select Location",
    "北京互联网法院法律服务工作站",
    "中国消费者协会",
    "北京市消费者协会",
];
