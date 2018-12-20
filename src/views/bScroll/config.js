/**
 * @param otherSlots 其他增项 
 * @param coefficient 增项中算法系数
 */
export const calcItems = {
    otherSlots: [
        {
            "name": "客餐厅",
            "type": 0,
            "style": [
                {
                    "name": "造型电视墙",
                    "description": "运用石材、软包、砖上墙等，昂贵 装饰材料，达到提升皮质的作用。",
                    "values": {
                        "value": 1,
                        "coefficient": 1.05
                    }
                },
                {
                    "name": "造型吊顶",
                    "description": "运用圆弧、欧式、多级、木质装饰 等材料，达到提升品质的作用。",
                    "values": {
                        "value": 2,
                        "coefficient": 1.07
                    }
                },
                {
                    "name": "地面拼花",
                    "description": "通过砖或石材，不同的造型拼铺达 到不同的风格展现及区域划分。",
                    "values": {
                        "value": 3,
                        "coefficient": 1.04
                    }
                },
                {
                    "name": "其他造型装饰",
                    "description": "通过墙板、壁纸、装饰造型，满足 不同风格的要求。比如：屏风等。",
                    "values": {
                        "value": 4,
                        "coefficient": 1.03
                    }
                },
                {
                    "name": "定制酒柜及装饰柜",
                    "description": "通过定制达到更好的储藏功能及装 饰效果、避免后期购买尺寸不合适 风格不统一",
                    "values": {
                        "value": 5,
                        "coefficient": 1.05
                    }
                }
            ]
        },
        {
            "name": "主卧室",
            "type": 1,
            "style": [
                {
                    "name": "主卧室背景墙",
                    "description": "运用石材、软包、砖上墙等，昂贵 装饰材料，达到提升皮质的作用。",
                    "values": {
                        "value": 1,
                        "price": 1630
                    }
                },
                {
                    "name": "地面材质提升",
                    "description": "运用圆弧、欧式、多级、木质装饰 等材料，达到提升品质的作用。",
                    "values": {
                        "value": 2,
                        "price": 590
                    }
                },
                {
                    "name": "墙面材质提升",
                    "description": "通过砖或石材，不同的造型拼铺达 到不同的风格展现及区域划分。",
                    "values": {
                        "value": 3,
                        "price": 480
                    }
                },
                {
                    "name": "顶面造型",
                    "description": "通过定制达到更好的储藏功能及装 饰效果、避免后期购买尺寸不合适 风格不统一",
                    "values": {
                        "value": 4,
                        "price": 820
                    }
                },
                {
                    "name": "定制衣柜",
                    "description": "运用圆弧、欧式、多级、木质装饰 等材料，达到提升品质的作用。",
                    "values": {
                        "value": 5,
                        "price": 3320
                    }
                },
            ]
        },
        {
            "name": "次卧室",
            "type": 2,
            "style": [
                {
                    "name": "卧室背景墙",
                    "description": "运用圆弧、欧式、多级、木质装饰 等材料，达到提升品质的作用。",
                    "values": {
                        "value": 1,
                        "price": 1150
                    }
                },
                {
                    "name": "地面材质提升",
                    "description": "通过砖或石材，不同的造型拼铺达 到不同的风格展现及区域划分。",
                    "values": {
                        "value": 2,
                        "price": 530
                    }
                },
                {
                    "name": "墙面材质提升",
                    "description": "通过墙板、壁纸、装饰造型，满足 不同风格的要求。比如：屏风等。",
                    "values": {
                        "value": 3,
                        "price": 430
                    }
                },
                {
                    "name": "顶面造型",
                    "description": "通过定制达到更好的储藏功能及装 饰效果、避免后期购买尺寸不合适 风格不统一",
                    "values": {
                        "value": 4,
                        "price": 680
                    }
                },
                {
                    "name": "定制衣柜",
                    "description": "通过定制达到更好的储藏功能及装 饰效果、避免后期购买尺寸不合适 风格不统一",
                    "values": {
                        "value": 5,
                        "price": 2860
                    }
                }
            ]
        },
        {
            "name": "厨房",
            "type": 3,
            "style": [
                {
                    "name": "碗架、拉篮等五金件",
                    "description": "运用石材、软包、砖上墙等，昂贵 装饰材料，达到提升皮质的作用。",
                    "values": {
                        "value": 1,
                        "price": 560
                    }
                },
                {
                    "name": "橱柜高柜（增加储物，集成电器）",
                    "description": "运用圆弧、欧式、多级、木质装饰 等材料，达到提升品质的作用。",
                    "values": {
                        "value": 2,
                        "price": 1280
                    }
                },
                {
                    "name": "提升橱柜装饰效果",
                    "description": "通过定制达到更好的储藏功能及装 饰效果、避免后期购买尺寸不合适 风格不统一",
                    "values": {
                        "value": 3,
                        "price": 730
                    }
                },
                {
                    "name": "防水石膏板造型吊顶",
                    "description": "通过砖或石材，不同的造型拼铺达 到不同的风格展现及区域划分。",
                    "values": {
                        "value": 4,
                        "price": 430
                    }
                },
                {
                    "name": "净水器",
                    "description": "通过定制达到更好的储藏功能及装 饰效果、避免后期购买尺寸不合适 风格不统一",
                    "values": {
                        "value": 5,
                        "price": 1650
                    }
                },
                {
                    "name": "瓷砖升级",
                    "description": "运用圆弧、欧式、多级、木质装饰 等材料，达到提升品质的作用。",
                    "values": {
                        "value": 6,
                        "price": 710
                    }
                },
            ]
        },
        {
            "name": "主卫",
            "type": 4,
            "style": [
                {
                    "name": "瓷砖升级",
                    "description": "运用石材、软包、砖上墙等，昂贵 装饰材料，达到提升皮质的作用。",
                    "values": {
                        "value": 1,
                        "price": 660
                    }
                },
                {
                    "name": "淋浴房",
                    "description": "通过墙板、壁纸、装饰造型，满足 不同风格的要求。比如：屏风等。",
                    "values": {
                        "value": 2,
                        "price": 1640
                    }
                },
                {
                    "name": "浴缸",
                    "description": "通过定制达到更好的储藏功能及装 饰效果、避免后期购买尺寸不合适 风格不统一",
                    "values": {
                        "value": 3,
                        "price": 2080
                    }
                },
                {
                    "name": "防水石膏板造型吊顶",
                    "description": "通过砖或石材，不同的造型拼铺达 到不同的风格展现及区域划分。",
                    "values": {
                        "value": 4,
                        "price": 380
                    }
                },
                {
                    "name": "洁具升级",
                    "description": "运用圆弧、欧式、多级、木质装饰 等材料，达到提升品质的作用。",
                    "values": {
                        "value": 5,
                        "price": 1220
                    }
                },
            ]
        },
        {
            "name": "次卫",
            "type": 5,
            "style": [
                {
                    "name": "瓷砖升级",
                    "description": "运用石材、软包、砖上墙等，昂贵 装饰材料，达到提升皮质的作用。",
                    "values": {
                        "value": 1,
                        "price": 660
                    }
                },
                {
                    "name": "淋浴房",
                    "description": "运用圆弧、欧式、多级、木质装饰 等材料，达到提升品质的作用。",
                    "values": {
                        "value": 2,
                        "price": 1640
                    }
                },
                {
                    "name": "浴缸",
                    "description": "运用圆弧、欧式、多级、木质装饰 等材料，达到提升品质的作用。",
                    "values": {
                        "value": 3,
                        "price": 2080
                    }
                },
                {
                    "name": "防水石膏板造型吊顶",
                    "description": "运用圆弧、欧式、多级、木质装饰 等材料，达到提升品质的作用。",
                    "values": {
                        "value": 4,
                        "price": 380
                    }
                },
                {
                    "name": "洁具升级",
                    "description": "运用圆弧、欧式、多级、木质装饰 等材料，达到提升品质的作用。",
                    "values": {
                        "value": 5,
                        "price": 1220
                    }
                }
            ]
        },
        {
            "name": "阳台",
            "type": 6,
            "style": [
                {
                    "name": "阳光房",
                    "description": "运用圆弧、欧式、多级、木质装饰 等材料，达到提升品质的作用。",
                    "values": {
                        "value": 1,
                        "price": 3260
                    }
                },
                {
                    "name": "花池及水景",
                    "description": "通过砖或石材，不同的造型拼铺达 到不同的风格展现及区域划分。",
                    "values": {
                        "value": 2,
                        "price": 2630
                    }
                },
                {
                    "name": "定制洗衣台",
                    "description": "通过墙板、壁纸、装饰造型，满足 不同风格的要求。比如：屏风等。",
                    "values": {
                        "value": 3,
                        "price": 890
                    }
                }
            ]
        },
        {
            "name": "整体添加",
            "type": 7,
            "style": [
                {
                    "name": "空调",
                    "description": "通过砖或石材，不同的造型拼铺达 到不同的风格展现及区域划分。",
                    "values": {
                        "value": 1,
                        "coefficient": 1.35
                    }
                },
                {
                    "name": "地暖",
                    "description": "通过墙板、壁纸、装饰造型，满足 不同风格的要求。比如：屏风等。",
                    "values": {
                        "value": 2,
                        "coefficient": 1.2
                    }
                },
                {
                    "name": "新风设备",
                    "description": "通过定制达到更好的储藏功能及装 饰效果、避免后期购买尺寸不合适 风格不统一",
                    "values": {
                        "value": 3,
                        "coefficient": 1.35
                    }
                },
                {
                    "name": "智能设备",
                    "description": "通过定制达到更好的储藏功能及装 饰效果、避免后期购买尺寸不合适 风格不统一",
                    "values": {
                        "value": 4,
                        "coefficient": 1.08
                    }
                }
            ]
        }
    ]
}
