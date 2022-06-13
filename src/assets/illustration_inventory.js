import { Box, SvgIcon, Typography } from "@mui/material";

export default function InventoryTitleIllustration({ ...other }) {
    return (
        <Box {...other} sx={{ overflow: 'hidden', width:'100%',height:"128px"  }}>
           
            <Box component="div" sx={{ width: '1920px', height: '1080px' }} >
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1920 1080">
                <defs >
                    <clipPath id="clippath-1">
                    <rect fill="none" x='70' y='120' width='420' height = '138'/>
                    </clipPath>
                    <clipPath id="clippath-2">
                    <path d="M476.1571,258.5046H87.2481v-51.5182c0-11.5945,9.3992-20.9938,20.9938-20.9938H404.0175c8.7981,0,17.1213,3.9911,22.6298,10.8515l49.5098,61.6605Z" fill="none"/>
                    </clipPath>
                   
                </defs>
                <g clipPath="url(#clippath-1)" transform="scale(0.5,0.5) translate(-80,0)">
                    <g>
                        <path d="M85.0435,260.7095v-53.7231c0-12.7915,10.4067-23.1982,23.1982-23.1982H404.0176c9.5156,0,18.3906,4.2554,24.3491,11.6758l52.3882,65.2456H85.0435Z" fill="#f2f2f2" />
                        <path d="M404.0175,185.9927c8.7982,0,17.1213,3.9911,22.6298,10.8515l49.5098,61.6604H87.248v-51.5181c0-11.5945,9.3992-20.9938,20.9938-20.9938H404.0175m0-4.4095H108.2418c-14.0074,0-25.4033,11.3959-25.4033,25.4033v55.9277H485.3528l-5.7574-7.1703-49.5098-61.6604c-6.3786-7.9441-15.8801-12.5002-26.0681-12.5002h0Z" fill="#c60000" />
                    </g>
                    <g opacity=".24">
                        <g clipPath="url(#clippath-2)">
                            <g opacity=".46">
                                <path d="M150.1143,190.931c1.7357,.3883,3.4712,.7773,5.2072,1.1642,.2864,.0638,.5778,.1068,.8617,.1797,1.2161,.3124,2.3306,.3063,3.6069-.1269,3.2017-1.0867,6.4852-.8538,9.7163,.0931,2.3675,.6938,4.6328,1.5964,6.5404,3.2241l.5711,.8295c.1286,1.0618-.1228,1.5976-1.1841,1.8761-1.0216,.268-2.1012,.4554-3.1529,.4443-4.2685-.0454-8.2667-1.0415-11.748-3.6561-.1172-.088-.2543-.1598-.3469-.269-.8625-1.0175-2.0476-1.3986-3.2833-1.6851-2.0798-.4822-4.1592-.9661-6.2474-1.3454,.9103,.7805,1.8764,1.5054,2.7209,2.3516,2.8901,2.8961,4.5303,6.4579,5.328,10.4257,.1419,.7058,.1471,1.469,.0558,2.1853-.1638,1.2853-1.0584,1.7725-2.1642,1.094-.931-.5713-1.8267-1.2924-2.5322-2.1222-2.5562-3.0067-4.4073-6.3852-4.8641-10.3792-.139-1.215-.0937-2.451-.1343-3.7228-3.9749-.6238-8.0807-.6459-12.2158-.1172,.3614,.1365,.726,.2652,1.0838,.4106,3.9265,1.5945,6.7777,4.4165,8.9832,7.9473,.5184,.83,.9136,1.7413,1.3161,2.6373,.1686,.3753,.2501,.8034,.2995,1.216,.1614,1.3485-.5485,2.004-1.8757,1.7039-1.5976-.3613-2.8999-1.2954-4.1483-2.2936-3.113-2.489-5.5201-5.4934-6.6782-9.3747-.2018-.6764-.3056-1.382-.4711-2.1509-3.9873,.5325-7.892,1.5668-11.6813,3.1334,.2823,.035,.5647,.0696,.847,.1052,4.3457,.5482,7.9078,2.6472,11.0015,5.6274,.7036,.6777,1.3162,1.4666,1.8793,2.2685,.4812,.6852,.951,1.4949,.4184,2.3306-.5188,.8141-1.4304,.6936-2.2374,.5915-1.9892-.2516-3.775-1.0896-5.5233-2.0186-2.9908-1.5891-5.4324-3.7682-7.1668-6.6973-.3061-.517-.5383-1.0778-.8343-1.6787-4.0662,1.7263-7.9024,3.8655-11.4379,6.534,5.2-1.6275,10.0692-.6115,14.7302,1.8475,.9433,.4977,1.8241,1.2073,2.558,1.985,.888,.941,.5788,1.8795-.6404,2.3441-1.3262,.5054-2.7159,.4874-4.1006,.3763-4.2626-.3419-8.1871-1.5799-11.4557-4.464-.5688-.5019-1.0365-1.1184-1.6117-1.7486-3.1384,2.4553-6.3346,5.0611-8.9113,8.3765,.2563-.108,.5117-.2182,.7692-.3235,4.8846-1.9986,9.7551-1.6899,14.594,.1469,.6278,.2383,1.219,.6649,1.7205,1.1214,.6865,.6249,.6219,1.4573-.1394,1.9864-.5421,.3767-1.1536,.7291-1.7856,.8889-5.1056,1.2913-10.0608,1.0437-14.737-1.6177-.5213-.2967-.9918-.6828-1.5334-1.0606-2.6076,3.2376-5.5784,6.2136-7.632,9.907,.0442,.0155,.0918,.0469,.1069,.0355,3.3245-2.5235,7.1275-3.5854,11.2425-3.547,1.497,.014,2.9962,.2734,4.4843,.4901,.459,.0668,.9141,.3148,1.3195,.5637,.9109,.5595,1.0799,1.4406,.2865,2.1357-.7411,.6494-1.6049,1.2366-2.5147,1.6024-4.2576,1.7118-8.6276,2.2482-13.0995,.8868-.8517-.2593-1.656-.6742-2.5533-1.0469-2.1239,3.4777-3.9922,7.2019-5.5063,11.0839,1.1649-.9067,2.2498-1.899,3.4723-2.6743,3.4041-2.1588,7.1758-3.0839,11.1906-2.9854,.6528,.016,1.3331,.2039,1.9407,.4568,.8085,.3365,1.0306,1.0723,.569,1.8178-.3139,.5071-.7084,1.0167-1.1849,1.3624-4.1756,3.0295-8.7943,4.5372-13.9968,3.9317-.4156-.0484-.8307-.1273-1.236-.2312-.4038-.1036-.795-.2566-1.227-.3996-1.4289,3.5204-1.8991,7.3026-2.8919,11.0853,.8384-.8656,1.5329-1.6672,2.3134-2.3737,2.9748-2.6928,6.4978-4.2506,10.4385-4.8796,.569-.0908,1.1792-.0678,1.7499,.0265,1.1825,.1953,1.6729,1.0436,1.057,2.0579-.5877,.9678-1.3223,1.9092-2.1827,2.637-2.8933,2.4476-6.1469,4.2357-9.9654,4.7555-1.2578,.1712-2.5406,.1581-4.0019,.24-.4641,3.5742-.6336,7.3446-.8992,11.1308,.0529-.0788,.1145-.1532,.1574-.2372,1.8223-3.5689,4.6801-6.0919,8.1514-7.9564,1.0433-.5604,2.1921-.9254,3.2962-1.3709,.1529-.0617,.3253-.085,.4912-.103,.7109-.077,1.4581-.2136,1.9778,.4513,.519,.6642,.2493,1.3698-.0432,2.0247-.884,1.9791-2.3757,3.4826-3.941,4.9185-2.395,2.1971-5.143,3.7422-8.34,4.4281-.6112,.1311-1.2373,.1927-1.9101,.2944,.0934,3.6925,.5715,7.3483,1.406,10.9957,.4793-1.1365,.8655-2.2492,1.4006-3.2849,1.7155-3.32,4.2518-5.9015,7.399-7.8765,.6047-.3795,1.3372-.6168,2.0432-.7585,.9175-.1842,1.5365,.3464,1.519,1.285-.0122,.6578-.1062,1.3612-.3612,1.9601-2.2285,5.233-5.6981,9.241-11.2262,11.1677-.0367,.0128-.0668,.0444-.1642,.1115,.9385,3.4389,2.5202,6.6599,3.7176,10.0228l.1985,.0057c-.0037-.1501-.0237-.3017-.0088-.4499,.4796-4.779,2.6407-8.7366,5.9778-12.0955,.4753-.4784,1.0944-.8604,1.7137-1.1384,.9154-.411,1.679-.0219,1.8252,.9713,.1229,.8346,.1535,1.7339-.0198,2.5527-1.1432,5.3991-3.6722,9.912-8.565,12.9353,.5475,1.2522,1.1,2.5113,1.6486,3.7722,.4179,.9605,.8283,1.9244,1.2488,2.8838,.066,.1505,.1432,.3105,.2575,.4232,1.6864,1.6615,3.3797,3.3159,5.0725,4.9708,.0578,.0565,.1277,.1006,.0851,.0675,1.4433-.7716,2.7726-1.6224,4.2069-2.2214,3.6031-1.5048,7.3689-1.6804,11.1819-1.0219,.6906,.1193,1.3841,.377,2.0063,.7039,1.2111,.6363,1.3178,1.7555,.1833,2.5298-.9577,.6536-2.0075,1.2471-3.1017,1.6125-3.8959,1.3008-7.8598,1.6894-11.8743,.4937-.0561-.0167-.118-.014-.2706,.0953,2.6424,2.3717,5.2847,4.7434,7.9679,7.1518,1.4378-1.8263,3.0593-3.1701,4.9329-4.1894,3.0342-1.6508,6.2814-2.5506,9.7464-2.5633,.5967-.0022,1.2172,.1167,1.786,.3036,1.0426,.3425,1.3372,1.1547,.7337,2.08-.3594,.551-.816,1.084-1.3409,1.4744-3.8896,2.893-8.2072,4.4964-13.1241,4.2094-.1361-.0079-.273-.001-.5566-.001,3.1897,2.1342,6.4241,3.8763,9.8858,5.3098,.7321-1.643,1.7695-3.053,3.0211-4.2959,2.7774-2.7583,6.11-4.5246,9.9142-5.3951,.5819-.1332,1.2124-.1573,1.8087-.1029,1.2237,.1116,1.7299,.924,1.1907,2.0341-.3961,.8154-.9179,1.6192-1.5528,2.2607-3.2534,3.2872-7.041,5.5996-11.7425,6.1402-.1142,.0131-.2262,.0459-.3459,.1874,3.6144,1.0311,7.2288,2.0622,10.8705,3.1011,.7911-2.9822,2.2579-5.3994,4.3097-7.4455,1.973-1.9675,4.1844-3.624,6.81-4.6383,.5762-.2226,1.2141-.3565,1.8307-.3869,.9997-.0493,1.5619,.5722,1.3728,1.5578-.1357,.7071-.375,1.4378-.747,2.049-2.4949,4.0991-5.8443,7.2027-10.4719,8.7664-.2123,.0717-.4207,.1553-.6278,.2902,3.7648,.4683,7.4703,1.3679,11.2527,1.3118,.2291-4.2477,2.0681-7.7329,4.8825-10.7728,1.3728-1.4828,2.8352-2.8637,4.6977-3.7287,.6929-.3218,1.4502-.6366,2.1419-.0997,.6956,.5399,.5837,1.3622,.4115,2.1005-.1752,.7512-.3962,1.5083-.7209,2.2052-1.755,3.7664-4.2108,6.9468-7.8472,9.0898-.7345,.4329-1.5227,.7749-2.3901,1.211,4.3075-.0166,8.4742-.4387,12.5653-1.1865-.5859-5.9558,1.774-10.7603,5.6932-14.9517,.5585-.5973,1.2854-1.0811,2.0149-1.4641,1.0183-.5347,1.8605-.0783,2.009,1.0692,.0926,.716,.0974,1.4811-.0495,2.1842-.9536,4.5643-3.0018,8.5196-6.6453,11.5377-.5546,.4594-1.1854,.8268-1.7541,1.2867,4.1977-.5445,8.034-2.2494,11.9643-3.527-1.5547-5.7635-.1272-10.9061,2.997-15.7045,.4351-.6683,1.0508-1.2618,1.6936-1.7418,.8738-.6526,1.7618-.3709,2.0887,.6712,.2526,.805,.4147,1.6879,.3789,2.5259-.2195,5.1354-1.7499,9.7549-5.5203,13.4426-.0539,.0527-.0892,.1243-.2279,.3223,4.0851-1.355,7.6298-3.4333,11.1757-5.5277-1.207-1.5612-1.6593-3.3621-1.955-5.1942-.6181-3.8298-.0271-7.5273,1.4617-11.0799,.3007-.7176,.773-1.4017,1.3027-1.9753,.7021-.7604,1.5691-.6598,2.0976,.2263,.3795,.6361,.7036,1.3561,.8391,2.0786,.9106,4.8555,.4559,9.5237-2.1015,13.8582-.3278,.5556-.7305,1.0671-1.0811,1.5739,1.3832-.3584,7.9937-5.7476,10.0347-8.2108-2.1554-2.0374-3.541-4.5477-4.3304-7.3761-.7381-2.6446-1.062-5.3494-.6926-8.0938,.0827-.6147,.2587-1.2388,.5136-1.8036,.4884-1.082,1.4639-1.3322,2.266-.4763,.7609,.8119,1.4479,1.7599,1.9188,2.7646,1.7826,3.8026,2.5933,7.7832,1.8065,11.9857-.1103,.5893-.2698,1.1695-.4482,1.9317,2.8588-3.1431,5.1898-6.4433,7.1774-10.0566-1.8835-.9176-3.3789-2.2793-4.6497-3.8756-2.3077-2.8988-3.7314-6.1997-4.253-9.8711-.0842-.5927-.0714-1.2226,.0278-1.8132,.2084-1.2409,1.0786-1.6964,2.1568-1.0303,.8768,.5417,1.7263,1.2202,2.3835,2.0084,2.5559,3.0653,4.3719,6.5012,4.823,10.5394,.095,.8505,.1045,1.7105,.2099,2.5899,1.9152-3.6169,3.3013-7.4316,4.1758-11.4213-4.3121-1.1036-7.5045-3.7054-9.952-7.2633-.8836-1.2844-1.5652-2.7156-2.2562-4.1205-.2393-.4866-.3039-1.0949-.3149-1.6503-.02-1.0086,.5839-1.5422,1.5805-1.3492,.6871,.1331,1.4001,.3615,1.9909,.7264,4.5786,2.8281,7.889,6.6459,9.1708,12.0028,.019,.0793,.0438,.1571,.0998,.3559,.0692-.2195,.1252-.336,.1414-.4578,.3463-2.5969,.6913-5.1939,1.0248-7.7924,.0255-.1991,.011-.4289-.0645-.6115-1.7175-4.1542-1.564-8.361-.2858-12.5686,.3684-1.2126,.9391-2.3716,1.5026-3.5129,.2218-.4491,.6433-.8227,1.0357-1.1586,.5261-.4503,1.0924-.2816,1.6261,.0489l.5711,.8295c.161,.583,.382,1.1567,.4736,1.7503,.6998,4.5363,.2436,8.9073-2.0447,12.9641-.4974,.8818-1.2095,1.6416-1.811,2.4661-.1609,.2206-.3599,.4589-.4031,.7127-.4563,2.683-.8846,5.3708-1.3206,8.0573l-.0013-.002c-.8569,2.605-1.6857,5.2196-2.5764,7.813-1.8519,5.3922-4.6339,10.2609-8.3512,14.5861-3.3122,3.8539-7.2107,7.051-11.3052,10.0251-.1318,.0957-.2525,.2068-.494,.4062,.2324-.0514,.2936-.0609,.3523-.0786,4.9654-1.4998,9.7079-.7158,14.2864,1.4651,.7368,.351,1.4327,.893,1.9885,1.4938,.776,.8388,.5831,1.7228-.4508,2.1828-.7534,.3352-1.585,.6036-2.401,.6713-5.7173,.475-10.9518-.648-15.1658-4.7006-3.4041,1.843-6.8141,3.6892-10.2011,5.5229,.0165,.0008,.0932,.012,.1687,.0067,3.9743-.2826,7.583,.8633,10.9735,2.8317,1.3264,.77,2.5953,1.6268,3.5584,2.8533,.5028,.6403,.8114,1.3265,.3678,2.1357l-.6221,.4282c-2.4253,.6077-4.7427,.0261-7.045-.6582-3.458-1.0278-6.4398-2.8105-8.7668-5.6101-.1605-.1932-.309-.3978-.4482-.6069-.1265-.19-.2328-.3934-.2934-.4973-3.9443,1.0615-7.8399,2.1099-11.8789,3.1969,.2419,.0542,.3443,.0875,.4491,.0991,5.3369,.589,9.5397,3.2174,12.9336,7.2546,.4313,.513,.7309,1.1788,.9443,1.8225,.2757,.8316-.139,1.5376-1.0072,1.6003-.9019,.0651-1.8688,.0425-2.7255-.2144-4.5457-1.363-8.4065-3.7532-11.0733-7.7965-.4683-.71-.8158-1.4998-1.2806-2.3675-3.5559,.4689-7.2367,.9542-10.9174,1.4396l-.0124,.1004c.4,.1561,.8015,.3084,1.1997,.4689,3.0969,1.2483,5.5309,3.3525,7.6368,5.89,.9573,1.1535,1.8051,2.3662,2.3082,3.7923,.0557,.1578,.1108,.3172,.1475,.4801,.3125,1.3892-.3707,2.2193-1.7495,1.9017-1.1262-.2594-2.26-.6824-3.2594-1.2597-3.2265-1.8639-5.9724-4.2687-7.7204-7.6328-.5933-1.1419-1.0278-2.3664-1.5182-3.5141-3.7525-.336-7.5887-.6795-11.1661-.9999,.8267,.5723,1.937,1.2378,2.9296,2.0478,2.7754,2.2648,4.6968,5.1651,6.0018,8.4761,.2572,.6526,.405,1.3748,.4578,2.0759,.1055,1.3988-.7125,2.0751-2.0034,1.5559-1.0131-.4074-2.0044-.9835-2.8488-1.6757-3.2832-2.6917-5.7565-5.9661-6.8125-10.1583-.2333-.9262-.3165-1.8902-.4738-2.8684-3.5736-.9607-7.2523-1.9496-11.0032-2.9579,.8234,.8112,1.6255,1.5167,2.3289,2.3097,2.4831,2.7995,3.9611,6.1013,4.664,9.7502,.1479,.7675,.1514,1.5953,.0461,2.3715-.1608,1.1852-.98,1.5756-2.0694,1.0731-1.2355-.5699-2.1354-1.5569-2.947-2.5963-2.2516-2.8834-3.9582-6.0394-4.3958-9.7358-.1538-1.2988-.1103-2.621-.1547-3.8697l-9.5579-4.8712c.6323,1.1168,1.5475,2.4871,2.2168,3.9685,1.2419,2.7484,1.774,5.6779,1.6896,8.6936-.0225,.8023-.1899,1.6336-.4657,2.3876-.3871,1.0585-1.3078,1.3233-2.1522,.5778-.7411-.6543-1.4333-1.4394-1.9177-2.2964-2.2445-3.9706-3.399-8.1984-2.6615-12.7967,.1285-.8014,.3744-1.5839,.5571-2.3381l-8.0355-6.3911c.0134,.041,.0544,.1904,.1104,.3339,1.632,4.1824,1.6655,8.4356,.4962,12.7182-.1872,.6857-.5882,1.3427-1.0097,1.9268-.4833,.6697-1.2332,.7431-1.7898,.1493-.5033-.5368-.9797-1.1785-1.2288-1.8612-1.71-4.6879-1.9638-9.4089-.1181-14.1347,.1447-.3704,.2688-.7728,.5081-1.0772,.5016-.6379,.3158-1.0632-.2384-1.5499-.9376-.8234-1.817-1.7132-2.7967-2.6473-.0408,.1965-.0739,.2699-.0679,.3399,.1606,1.87-.339,3.6171-.9908,5.335-.2671,.7039-.9636,1.0441-1.6738,.831-.7004-.2102-1.1069-.9041-.9379-1.6283,.0422-.1808,.1106-.367,.2124-.5207,1.2558-1.8967,1.1999-3.9612,.7719-6.0676-.0353-.1737-.1892-.3684-.3433-.4659-1.8189-1.151-3.7263-1.8905-5.952-1.4221-.9462,.1991-1.6686-.4221-1.7021-1.2968-.0338-.8821,.608-1.417,1.6093-1.4103,1.78,.0119,3.515,.2236,5.1459,.9949,.0477,.0225,.1124,.0091,.3077,.0205-.6219-1.4453-1.206-2.8228-1.818-4.1878-.049-.1094-.2985-.2036-.4401-.1861-5.7419,.7079-10.583-1.3215-14.8748-4.9411-.5702-.4809-1.0201-1.1709-1.3534-1.8487-.3744-.7615-.0335-1.4697,.8023-1.6519,.8646-.1885,1.7961-.3186,2.6632-.2051,4.234,.5545,8.0634,2.0723,11.238,5.0255,.0857,.0797,.1888,.1406,.2023,.1504l-3.0875-9.7654c-6.0899-.4697-10.6365-3.5927-14.1479-8.4432-.3362-.4643-.5749-1.031-.7324-1.586-.3003-1.0586,.2089-1.7707,1.3038-1.776,.7006-.0034,1.4342,.0969,2.0978,.3171,3.1999,1.0618,5.9959,2.8109,8.3136,5.256,.9692,1.0224,1.7645,2.2096,2.4526,3.085-.3631-3.397-.7583-7.0943-1.161-10.8613-2.7079-.6195-5.1329-2.0734-7.2175-4.0797-2.0557-1.9786-3.7596-4.2341-4.8213-6.9107-.2348-.592-.3654-1.2538-.3978-1.891-.0492-.9682,.557-1.5204,1.5155-1.3543,.6889,.1194,1.4044,.3388,2.0016,.693,4.2328,2.5105,7.3696,5.963,8.9816,10.6863,.0325,.0951,.0647,.1903,.2126,.2838,.3861-3.7763,.7722-7.5527,1.157-11.3167-2.9205-1.2215-5.1433-3.306-6.9035-5.8976-1.3372-1.9687-2.3795-4.1-2.9643-6.4203-.1824-.7238-.2894-1.4904-.2761-2.2347,.0266-1.4914,.973-2.088,2.276-1.3554,.9711,.546,1.8998,1.2528,2.6683,2.0587,3.0395,3.1876,5.1365,6.8713,5.6092,11.3429,.0036,.034,.0419,.0644,.008,.0152,1.0261-3.6389,2.0692-7.3376,3.1364-11.1224-1.3509-.8545-2.5322-2.0896-3.5495-3.4806-2.3036-3.1497-3.4689-6.7185-3.7809-10.5774-.0532-.658,.0187-1.3491,.1644-1.9952,.2902-1.2865,1.243-1.6888,2.3005-.9083,.764,.5638,1.4886,1.2546,2.0339,2.0277,1.9055,2.7018,3.2945,5.6505,3.7674,8.9584,.1593,1.1143,.1783,2.2486,.2688,3.4731l5.3003-9.7853c-2.8355-2.6789-4.2914-5.9734-4.8942-9.691-.3234-1.9945-.4919-4.0029-.151-6.0113,.1074-.6328,.2904-1.2762,.5696-1.8512,.4803-.9888,1.3683-1.191,2.1534-.4333,.6371,.6148,1.234,1.3423,1.6231,2.131,2.0479,4.1519,2.9581,8.4959,1.9479,13.112-.0845,.3863-.1871,.7687-.2083,1.1917l7.138-9.8247c-1.7194-2.3034-2.5945-5.0524-2.8396-7.9993-.2295-2.759-.0353-5.4985,.8682-8.1399,.2199-.6429,.5611-1.2696,.9622-1.8192,.6033-.8267,1.4426-.8222,2.1229-.0455,.9313,1.0632,1.3001,2.3885,1.5808,3.7227,.8932,4.2454,.8172,8.4204-1.0459,12.4393-.0317,.0684-.0463,.1447-.047,.1467l8.8153-7.5718c-1.9919-4.392-1.6101-8.9055-.0488-13.4226,.4807-1.3909,1.0632-2.7378,2.0188-3.8858,.1069-.1284,.2167-.2558,.3373-.3709,1.0352-.9878,2.046-.8284,2.5416,.5101,.3226,.8711,.5357,1.8237,.5797,2.7501,.2295,4.8353-.7542,9.3428-3.811,13.2423-.0342,.0437-.0514,.1008-.0191,.0355l10.6709-5.9994c-.0812-.2758-.2652-.6509-.2932-1.0373-.1577-2.171,.2372-4.2714,.9981-6.2915,1.1857-3.1477,2.9889-5.901,5.5045-8.1528,.4281-.3832,.9599-.682,1.4904-.9125,.966-.4198,1.8021-.0141,1.8916,1.0356,.0856,1.0045,.0478,2.072-.2018,3.0433-1.0511,4.0903-2.9857,7.6892-6.2631,10.4536-.6447,.5437-1.3883,.9701-2.056,1.508,4.0259-1.5928,8.1747-2.6356,12.3257-3.0808,.1223-.7681,.1617-1.4894,.3575-2.1654,.9599-3.3144,2.8405-6.0441,5.4007-8.3282,1.4131-1.2607,2.8825-2.4432,4.6521-3.172,.4775-.1967,1.0002-.3381,1.5128-.383,.9307-.0815,1.5454,.4712,1.4276,1.3932-.107,.837-.3122,1.7153-.7042,2.4531-2.4866,4.6811-5.9785,8.2601-11.1801,9.8882-.0556,.0174-.1027,.0617-.2347,.1436,.2156,.0093,.3455,.0181,.4756,.0199,3.7924,.0545,7.5848,.1055,11.377,.166,.4599,.0073,.919,.0653,1.3784,.0998l.2224-.0016Z" />
                                <path d="M150.1143,190.931l-.2224,.0016c-.4621-.2525-.3634-.6461-.1643-.9678,.6806-1.0997,1.2974-2.2622,2.1248-3.2437,2.7808-3.2987,6.3964-5.2715,10.5448-6.3083,.5405-.1351,1.1238-.1758,1.6818-.1482,1.4008,.0691,1.9513,.9189,1.3357,2.1706-.3819,.7766-.8968,1.5267-1.4954,2.1512-3.1258,3.2613-6.8165,5.5326-11.3635,6.1935-.8042,.1169-1.6273,.1041-2.4417,.1511Z" />
                                <path d="M209.6306,277.6156c.2206-.4943,.4284-.9948,.6638-1.482,1.5097-3.125,3.785-5.5777,6.7356-7.3585,1.442-.8703,3.0004-1.5627,4.5523-2.2279,.5898-.2528,1.3118-.2905,1.9689-.2708,.9493,.0284,1.4326,.6496,1.2144,1.5705-.1562,.6593-.4052,1.345-.7909,1.8937-3.012,4.286-6.9275,7.2887-12.1601,8.3511-.4491,.0912-.9148,.1009-1.3728,.1484-.4689,.0486-.7604-.1334-.8126-.6263l.0013,.0017Z" />
                                <path d="M218.9028,288.2444c-3.6129,2.3533-7.4971,3.7977-11.8867,3.5187-.5406-.0343-1.0838-.1212-1.6111-.2461-.6267-.1483-.7444-.3658-.3645-.8691,.6774-.8973,1.3631-1.815,2.1862-2.5709,3.3502-3.077,7.3905-4.5918,11.8739-4.9868,.6523-.0575,1.3463,.0391,1.9839,.2062,1.0234,.2684,1.3368,1.0582,.8473,2.0006-.6071,1.169-1.6275,1.9466-2.6667,2.6974-.1188,.0859-.2413,.1667-.3621,.2499Z" />
                                <path d="M198.2819,301.0019c3.7886-2.4736,7.9789-3.197,12.3949-2.8757,1.0128,.0737,2.0125,.3695,3.0085,.6045,.2952,.0696,.5812,.2482,.8297,.433,.7627,.5671,.9215,1.3648,.2126,1.9797-.8075,.7004-1.7281,1.355-2.7114,1.7535-4.1667,1.6885-8.455,2.233-12.8528,.9587-.7194-.2084-1.4046-.5414-2.0948-.8416-.4828-.21-.4799-.5446-.1217-.8728,.4311-.3949,.8888-.7608,1.335-1.1393Z" />
                            </g>
                            <g  opacity=".46">
                                <path d="M294.0722,359.1591c-1.4733-2.3224-2.9457-4.6455-4.4208-6.9668-.2434-.3829-.515-.7486-.7457-1.1387-.9881-1.6714-2.2134-2.8834-4.0827-3.8053-4.6891-2.3127-8.0248-6.1576-10.5224-10.7261-1.8301-3.3474-3.3201-6.8113-3.6262-10.6769l.2826-1.5315c1.0205-1.3016,1.8812-1.6127,3.3461-.7566,1.4102,.8241,2.7956,1.7996,3.9333,2.9617,4.6177,4.717,7.9003,10.1779,8.848,16.8435,.0319,.2245,.1033,.4528,.0851,.6734-.1695,2.0556,.7096,3.7682,1.7475,5.4327,1.7469,2.8014,3.4916,5.6042,5.3601,8.3022-.142-1.8488-.4057-3.6978-.4038-5.5465,.0066-6.3269,2.1077-12.015,5.5741-17.2257,.6166-.9269,1.4454-1.7671,2.3285-2.4505,1.5845-1.2263,3.0954-.7808,3.5626,1.1702,.3934,1.6426,.5842,3.4106,.4483,5.0894-.4926,6.0828-2.1628,11.801-6.0304,16.6676-1.1765,1.4804-2.5775,2.7825-3.9238,4.2176,3.6642,5.0284,8.1295,9.542,13.2291,13.4854-.246-.5444-.5038-1.0838-.7362-1.634-2.5499-6.0368-2.5819-12.2402-1.1327-18.5125,.3407-1.4744,.905-2.9029,1.4447-4.3228,.226-.5947,.6049-1.1519,1.0021-1.6572,1.298-1.651,2.791-1.5916,3.914,.1878,1.3518,2.1419,1.7545,4.5873,2.0281,7.0438,.6822,6.1254,.0292,12.0426-2.9485,17.5528-.5189,.9602-1.177,1.8452-1.8368,2.8671,4.9422,3.7776,10.3427,6.9162,16.199,9.3466-.2704-.347-.5414-.6936-.8111-1.0412-4.1524-5.3512-5.7521-11.5413-5.8763-18.1827-.0282-1.5104,.1645-3.0428,.4256-4.5353,.2231-1.2753,.5948-2.6745,2.0909-3.0058,1.4575-.3228,2.3224,.8056,3.0932,1.7997,1.9,2.4502,2.9363,5.3192,3.8322,8.2465,1.5326,5.0078,1.8197,10.0603,.5134,15.1596-.2306,.9001-.5899,1.7671-.9233,2.7479,6.3338,2.5585,12.8675,4.4142,19.6512,5.3622-7.4654-3.9063-11.6787-10.3414-14.0864-18.1267-.4873-1.5757-.6745-3.3146-.6265-4.9674,.058-1.9999,1.4222-2.688,3.2633-1.8629,2.0027,.8975,3.5026,2.4367,4.8953,4.0723,4.287,5.0348,7.2246,10.6796,7.6451,17.4073,.0732,1.1708-.0896,2.3564-.1497,3.6743,6.1164,.7469,12.4605,1.3925,18.9032,.5848-.3983-.1622-.7982-.321-1.1948-.4873-7.5264-3.1556-12.5144-8.8187-15.797-16.1183-.4259-.947-.6059-2.06-.6551-3.1076-.0673-1.434,.9134-2.2735,2.3245-2.0196,1.0047,.1808,2.0586,.4643,2.9245,.9805,6.9946,4.1706,12.1421,9.8597,14.3452,17.883,.2456,.8945,.3378,1.8311,.5169,2.8364,6.3914-.6888,12.8938-.6946,19.1778-2.4875-.0313-.0653-.049-.1517-.078-.1557-6.3944-.8758-11.714-3.8731-16.1714-8.4146-1.6216-1.6522-2.9772-3.5751-4.3673-5.4392-.4288-.575-.6554-1.3437-.8264-2.0592-.3842-1.6079,.3945-2.756,2.022-2.6486,1.5204,.1003,3.1069,.4027,4.5017,.9976,6.5272,2.7837,11.892,6.9755,15.2931,13.3539,.6477,1.2148,1.0735,2.5479,1.6472,3.9366,6.125-1.4803,12.2401-3.5096,18.1404-6.0987-2.2651-.2823-4.5365-.3835-6.721-.8725-6.0828-1.3616-11.2183-4.4743-15.5006-8.9719-.6963-.7313-1.2347-1.6807-1.6226-2.6214-.5161-1.2519,.0457-2.2994,1.3654-2.6098,.8977-.2112,1.8862-.3371,2.7853-.1941,7.8783,1.2532,14.5772,4.6549,19.6038,11.0055,.4016,.5073,.7692,1.0475,1.0987,1.6043,.3283,.5548,.5887,1.1498,.9046,1.7786,5.4118-2.2869,10.0615-5.9084,15.2832-8.959-1.8632,.0298-3.4991,.1468-5.1251,.0659-6.1972-.3083-11.7527-2.4573-16.7495-6.0784-.7214-.5228-1.3635-1.2153-1.8844-1.9424-1.0794-1.5066-.6881-2.9703,1.0944-3.4059,1.7008-.4156,3.5334-.6417,5.2701-.4968,5.84,.4874,11.3528,2.0898,16.0964,5.6967,1.5625,1.1881,2.9509,2.6051,4.6382,4.1134,4.4157-3.4007,8.7237-7.338,13.1541-11.1877-.144,.0284-.2928,.0423-.4314,.0872-5.8949,1.9097-11.7785,1.5438-17.6129-.2132-1.7536-.5281-3.4087-1.3851-5.1031-2.1052-.2347-.0997-.4487-.2627-.6498-.4245-.8616-.6931-1.8279-1.3609-1.6691-2.6561,.1587-1.2937,1.2252-1.7704,2.2612-2.1666,3.1306-1.1973,6.4057-1.2102,9.6874-1.0688,5.0212,.2164,9.7155,1.5316,13.9612,4.2775,.8117,.5249,1.5636,1.1423,2.4105,1.7667,3.9354-4.1396,7.4101-8.6598,10.4857-13.5605-1.7668,.7187-3.4057,1.513-5.1233,2.0603-5.506,1.7544-11.102,1.8038-16.7029,.5222-1.0762-.2463-2.1366-.7878-3.0635-1.4047-1.2046-.8018-1.3013-2.0588-.2559-3.066,.7327-.7059,1.6045-1.3723,2.5382-1.7483,8.1587-3.2852,16.3351-3.874,24.4864,.064,.0541,.0261,.1217,.0245,.3014,.0576,2.7341-4.7865,4.5265-10.0378,6.8944-15.0243l-.2108-.2233c-.16,.1681-.3041,.3558-.4824,.5016-5.75,4.7011-12.4404,6.6654-19.7621,6.6893-1.0428,.0034-2.1375-.2559-3.1186-.629-1.4504-.5516-1.8598-1.8119-.9337-3.0578,.7782-1.047,1.728-2.0638,2.8129-2.7695,7.1536-4.6536,14.8535-6.8228,23.5094-4.7787,.7706-1.9678,1.5432-3.9487,2.322-5.9273,.5933-1.5073,1.1985-3.0099,1.7877-4.5188,.0924-.2367,.183-.4961,.1812-.7443-.0272-3.6607-.0697-7.3213-.1112-10.9818-.0014-.125-.0297-.2496-.0192-.1668-2.4219-.7345-4.8056-1.2576-7.0291-2.171-5.5852-2.2945-9.895-6.22-13.3441-11.1093-.6247-.8855-1.1012-1.9256-1.4241-2.9634-.6285-2.02,.4786-3.3605,2.5658-2.9666,1.7619,.3325,3.5588,.8314,5.1546,1.6284,5.6823,2.8376,10.4415,6.7469,13.5237,12.444,.0431,.0796,.1137,.1444,.4001,.1918-.2959-5.4826-.5919-10.9652-.8924-16.5325-3.5691,.4248-6.8114,.1211-9.9747-.8129-5.1227-1.5127-9.6573-4.0794-13.4599-7.8543-.6548-.65-1.2033-1.4586-1.6209-2.2849-.7655-1.5146-.1995-2.7247,1.4721-3.0767,.9955-.2096,2.0775-.293,3.0784-.1459,7.4164,1.0898,13.8906,4.0575,18.9531,9.7477,.1401,.1575,.2974,.2996,.6076,.6097-1.1541-5.8214-2.7859-11.2629-5.0035-16.6155-2.597,.996-5.273,1.4034-8.0007,1.3939-6.0529-.021-11.6283-1.7336-16.7398-4.9414-.7819-.4907-1.4976-1.1537-2.0902-1.8652-1.216-1.4601-.8812-2.9019,.9222-3.5261,1.3247-.4585,2.7742-.7668,4.1699-.774,7.1518-.0369,13.8217,1.576,19.5536,6.1258,.1393,.1106,.2976,.1971,.5832,.1733-2.8247-5.0796-5.6494-10.1593-8.4953-15.2771-4.1259,2.3959-8.3729,3.4351-12.8536,3.4289-4.3087-.006-8.5381-.6128-12.5181-2.3746-.8734-.3866-1.7174-.9377-2.4248-1.5787-1.147-1.0392-1.0821-2.3335,.2023-3.2044,.9215-.6248,1.9822-1.1621,3.0573-1.4237,7.2102-1.7541,14.2661-1.4854,21.036,1.8649,.3106,.1537,.6298,.2901,1.0037,.3691-3.6045-4.6287-6.6727-9.664-10.8699-13.7385-4.8951,4.3941-10.7168,6.1942-17.1182,6.4407-3.1224,.1202-6.2314,.0312-9.2138-1.0596-1.1095-.4058-2.2818-.8896-2.4511-2.233-.1703-1.351,.8512-2.1277,1.8467-2.7467,1.0129-.6298,2.0825-1.216,3.1995-1.6229,6.0374-2.1994,12.2001-2.9917,18.5196-1.3587,1.2765,.3298,2.5122,.8177,3.9376,1.2892-4.7281-4.6918-9.7458-8.7863-15.0368-12.442-5.8716,7.1529-13.7055,9.826-22.574,10.1236-1.2639,.0424-2.5876-.2235-3.8041-.6023-1.6981-.5287-2.12-1.9487-1.0276-3.3659,.6816-.8842,1.513-1.726,2.4424-2.3342,6.0334-3.9481,12.598-6.0334,19.8821-5.3496,1.1087,.1041,2.2002,.392,3.3249,.5111-5.1853-3.9946-11.2443-6.3251-16.9388-9.2258-4.6021,8.002-11.7861,12.0642-20.449,13.895-1.2066,.255-2.5287,.2307-3.7564,.0528-1.669-.2419-2.332-1.5208-1.55-3.0179,.6041-1.1564,1.3922-2.299,2.3477-3.1762,5.8553-5.3753,12.5798-8.753,20.7349-8.6625,.1165,.0013,.2334-.0384,.6016-.1032-5.9484-2.9852-12.0969-4.5887-18.2642-6.1758-.3872,3.0269-1.8618,5.4906-3.5419,7.8172-3.5118,4.8635-8.201,8.2603-13.7136,10.5169-1.1135,.4558-2.378,.6874-3.5843,.7355-1.5992,.0638-2.4371-.9942-2.0462-2.541,.2806-1.1105,.7134-2.2522,1.3553-3.1904,4.3135-6.3048,9.9151-10.9122,17.451-12.8552,.966-.2491,1.9656-.3681,2.9031-.5389-1.9044-1.1206-15.0253-2.456-19.9503-1.9943,.1291,4.5845-1.1008,8.8446-3.3303,12.8003-2.0847,3.6988-4.688,7.0104-8.0928,9.6074-.7626,.5817-1.6375,1.0717-2.5338,1.4105-1.7171,.6491-3.0573-.144-2.9985-1.957,.0558-1.7197,.3412-3.5076,.9248-5.1211,2.2088-6.1072,5.6748-11.346,11.1303-15.0809,.765-.5238,1.5738-.9837,2.6023-1.6221-6.5628,.3109-12.7201,1.3707-18.8443,3.1483,1.0562,3.0629,1.2024,6.1869,.8465,9.3219-.6464,5.693-2.699,10.8591-6.1431,15.4439-.5561,.7402-1.2588,1.4148-2.0131,1.9522-1.5848,1.129-3.0342,.6755-3.4849-1.2317-.3665-1.551-.5534-3.2218-.4102-4.8023,.5569-6.1464,2.3282-11.8891,6.2505-16.7979,.8261-1.0338,1.7561-1.9846,2.6023-3.0614-6.0491,1.8607-11.7358,4.5163-17.0544,7.9225,3.5083,5.9217,4.1541,12.2574,2.94,18.8239-.4383,2.3706-1.2579,4.6808-2.0386,6.9726-.2704,.7938-.8649,1.5296-1.4601,2.1489-1.081,1.1248-2.3248,1.0478-3.2034-.2529-.6058-.8968-1.1356-1.9262-1.3826-2.9712-1.9141-8.0989-1.3593-15.8931,3.0966-23.1522,.0659-.1074,.1239-.2197,.28-.4982-.3156,.1644-.5043,.2305-.6553,.346-3.2182,2.4608-6.4351,4.9233-9.6411,7.4001-.2456,.1897-.481,.4569-.5982,.7392-2.6644,6.4203-7.4321,10.8524-13.4305,14.0555-1.7287,.9231-3.62,1.5664-5.4842,2.1981-.7335,.2486-1.6031,.1961-2.3993,.1344-1.0676-.0828-1.5024-.8865-1.7246-1.8315l.2826-1.5314c.4613-.8135,.847-1.6825,1.396-2.4318,4.195-5.7255,9.4732-10.0061,16.4113-11.9397,1.5081-.4203,3.1175-.4724,4.6767-.7164,.4171-.0653,.8954-.1082,1.22-.3385,3.4327-2.4348,6.84-4.9054,10.2542-7.3662l-.0008,.0036c3.7853-1.9115,7.5506-3.8641,11.3602-5.7259,7.921-3.8711,16.2866-6.1528,25.0807-6.8175,7.8357-.5922,15.5943,.1746,23.3234,1.3998,.2488,.0394,.5022,.0499,.9842,.096-.3104-.1979-.3876-.2545-.4711-.2993-7.0693-3.7895-11.3977-9.8323-14.0194-17.2233-.4219-1.1895-.5901-2.543-.541-3.8077,.0686-1.7657,1.2461-2.5214,2.8797-1.8938,1.1902,.4573,2.3931,1.0732,3.3594,1.8912,6.7709,5.7322,11.2666,12.6836,11.4431,21.7227,5.7374,1.707,11.4847,3.4169,17.1933,5.1153-.0172-.0189-.0887-.1151-.1771-.1917-4.6546-4.0366-7.3476-9.2356-8.9026-15.0952-.6083-2.2923-1.059-4.6166-.771-7.0107,.1503-1.2498,.5632-2.3377,1.933-2.7374l1.1484,.2119c3.3164,1.9875,5.2144,5.1574,6.9836,8.423,2.6573,4.9049,3.9685,10.1147,3.4517,15.7203-.0357,.3868-.0971,.7728-.1735,1.1538-.0694,.3461-.1756,.6848-.2229,.8646,5.4736,3.1522,10.8796,6.2654,16.4845,9.4932-.2052-.3237-.2808-.4722-.3827-.5995-5.1916-6.4796-6.913-13.9492-6.2097-22.0745,.0894-1.0326,.4898-2.0881,.9603-3.0254,.6078-1.2109,1.8333-1.5293,2.8511-.6485,1.0573,.915,2.0899,1.9969,2.7458,3.2146,3.4801,6.4608,5.0881,13.2959,3.583,20.633-.2643,1.2885-.7478,2.532-1.1884,3.989,4.4009,3.3755,8.9563,6.8695,13.5116,10.3634l.1233-.0962c-.2667-.608-.5392-1.2136-.7991-1.8245-2.0214-4.7512-2.382-9.7135-1.91-14.7908,.2146-2.308,.6136-4.5611,1.6228-6.6705,.1117-.2334,.2257-.4681,.3637-.6863,1.1773-1.8607,2.832-2.0213,3.9923-.1665,.9478,1.5151,1.7251,3.2173,2.1866,4.9414,1.4899,5.566,1.8629,11.1979,.0958,16.7879-.5998,1.8974-1.4636,3.7113-2.1824,5.5025,3.7357,4.4706,7.5548,9.0409,11.1161,13.3028-.2781-1.5297-.7645-3.4715-.9642-5.4424-.5583-5.5112,.512-10.7833,2.7055-15.8307,.4323-.9949,1.0605-1.9461,1.7693-2.7705,1.4142-1.6449,3.0481-1.4899,3.8919,.4893,.6622,1.5532,1.1164,3.2671,1.2827,4.9472,.6468,6.5332-.2291,12.818-3.6585,18.5566-.7577,1.2678-1.7208,2.4129-2.6183,3.6545,2.8571,4.9579,5.7982,10.0617,8.7971,15.2657-.0133-1.7874-.1189-3.4358-.0209-5.072,.3459-5.7762,2.3402-11.0026,5.5614-15.7611,.6776-1.0009,1.5788-1.9099,2.5428-2.6435,1.4718-1.1201,2.7943-.6513,3.4362,1.0895,.7279,1.9741,.6326,4.0373,.3836,6.0613-.6909,5.6148-2.2757,10.9317-5.839,15.452-1.2521,1.5883-2.7452,2.9866-4.0621,4.4005,1.7364,5.3459,3.5134,10.8169,5.1246,15.7774,.5297-1.9125,1.0274-4.4115,1.9153-6.7632,1.6473-4.3632,4.2687-8.1482,7.6585-11.3534,.9018-.8527,1.994-1.5786,3.12-2.1015,1.5807-.7341,2.877-.017,2.9851,1.7215,.0949,1.5259-.0067,3.1411-.4141,4.6079-1.8874,6.7958-5.2479,12.6812-11.0822,16.9026-1.0168,.7357-2.1413,1.3225-3.1658,1.9474,.5992,5.2564,1.2035,10.5582,1.7981,15.7746,.0302-.0595,.1487-.2677,.2444-.4859,2.7887-6.3577,7.4028-11.045,13.3641-14.4491,.9545-.545,2.1113-.825,3.2109-1.0028,1.2607-.2038,2.161,.5359,2.1204,1.7938-.0367,1.1373-.2173,2.3599-.6915,3.3787-3.2562,6.9957-8.1407,12.4354-15.3263,15.5846-.5632,.2468-1.1389,.5511-1.7334,.6222-1.2459,.1491-1.5078,.8173-1.434,1.9553,.1249,1.9256,.1135,3.8601,.1633,5.9527,.2594-.1703,.3759-.2142,.4459-.2974,1.8691-2.2203,4.3257-3.5844,6.9169-4.7502,1.0617-.4777,2.1953-.0881,2.7388,.9216,.536,.9956,.2218,2.1989-.7549,2.8059-.2438,.1516-.5222,.2803-.8016,.3371-3.4471,.7008-5.6433,3.0193-7.4787,5.7905-.1513,.2285-.1959,.6097-.134,.8848,.7303,3.2474,2.0074,6.1416,4.9531,8.0631,1.2524,.8169,1.363,2.2861,.4432,3.2792-.9275,1.0014-2.2142,.8846-3.3017-.2176-1.9333-1.9594-3.599-4.088-4.5389-6.7146-.0275-.0768-.1129-.1328-.314-.3589-.9004,2.2604-1.7678,4.4053-2.5912,6.567-.066,.1733,.1037,.549,.2777,.6848,7.0525,5.5043,10.1269,13.0169,10.8619,21.6674,.0977,1.1493-.1648,2.3957-.5416,3.5014-.4233,1.242-1.5703,1.6437-2.6835,.929-1.1515-.7392-2.3123-1.6156-3.1362-2.6878-4.0234-5.2359-6.551-11.0828-6.7931-17.7832-.0065-.1808-.0528-.3602-.0567-.3857-2.4149,4.6479-4.8695,9.3723-7.3019,14.0539,6.1453,7.1725,7.702,15.5589,6.2378,24.7021-.1401,.8753-.4986,1.756-.9334,2.535-.8292,1.4859-2.1646,1.7077-3.3675,.5163-.7697-.7623-1.4623-1.6741-1.9471-2.6405-2.3378-4.6599-3.4826-9.6297-3.3434-14.8375,.0582-2.1777,.4868-4.3455,.6915-6.055-3.3174,4.1115-6.928,8.5864-10.6067,13.1457,2.2835,3.6383,3.3454,7.8796,3.431,12.3529,.0843,4.4112-.5188,8.7406-2.2846,12.8283-.3905,.9041-.9714,1.7706-1.6326,2.5027-1.0048,1.1125-2.2715,1.0535-3.138-.1763-.6227-.8838-1.1651-1.9061-1.4308-2.9464-1.8832-7.3734-1.538-14.5785,1.864-21.5058,.0685-.1395,.1374-.2789,.0778-.5428-4.5514,3.7071-9.1027,7.4141-13.6392,11.1091,1.8578,4.529,2.009,9.2387,1.1,13.9972-.6905,3.6148-1.8812,7.0849-3.7789,10.2614-.592,.9909-1.3133,1.9461-2.1416,2.7454-1.6598,1.6017-3.3471,1.2192-3.9707-1.0067-.4648-1.6588-.7075-3.4471-.6665-5.1687,.162-6.8089,1.8969-13.1299,6.2694-18.5362,.0333-.0412,.0246-.1162,.0079-.0254-5.1009,2.8569-10.2858,5.7608-15.5912,8.7322,.5427,2.4115,.484,5.0536,.0754,7.687-.9252,5.9629-3.5533,11.1393-7.4316,15.7-.6613,.7776-1.4955,1.4547-2.3613,2.0018-1.724,1.0895-3.2057,.4875-3.5086-1.5223-.2189-1.4518-.2558-2.9996-.0067-4.4411,.8707-5.0379,2.5762-9.7809,5.6761-13.9149,1.0442-1.3926,2.2637-2.6537,3.5037-4.0916l-16.4952,4.9041c.1712,6.0296-1.8391,11.2239-5.245,15.948-1.8273,2.5345-3.8391,4.9147-6.4078,6.7381-.8094,.5745-1.713,1.078-2.647,1.4013-1.6063,.556-2.7984-.1939-2.8284-1.8807-.0244-1.3688,.1184-2.817,.5554-4.1049,2.3006-6.7792,6.0552-12.5243,12.2073-16.4672,.5148-.33,1.045-.6359,1.5308-1.0752-6.1567,.9751-12.3134,1.9503-18.5478,2.9377-.6385,4.3987-2.6876,8.3614-5.6419,11.8517-2.7659,3.2677-5.9736,6.0509-9.8498,7.9512-.9434,.4625-2.0017,.7747-3.0414,.9371-1.5636,.2442-2.4764-.6783-2.371-2.2715,.1442-2.1808,1.1901-4.0332,2.342-5.799,3.6655-5.6187,8.3137-10.1008,14.7453-12.458,.1095-.0401,.2089-.1076,.2118-.1091l-17.9184-1.3597c-2.6244,6.9805-7.9771,11.4981-14.6235,14.7301-2.0465,.9952-4.1561,1.831-6.4563,2.0414-.2572,.0235-.5166,.0428-.7743,.0367-2.212-.0518-3.1429-1.3314-2.2214-3.3369,.5997-1.3052,1.4083-2.5799,2.3732-3.641,5.0362-5.5381,11.0405-9.3911,18.6468-10.3126,.0852-.0103,.1663-.054,.0597-.0179l-18.228-5.1079c-.2128,.3904-.4218,1.0016-.8136,1.4548-2.2015,2.5463-4.9298,4.4111-7.9707,5.788-4.7383,2.1454-9.7206,3.1841-14.9335,2.8958-.8871-.0491-1.7953-.3038-2.6274-.6318-1.5153-.5973-1.986-1.955-.9359-3.2007,1.0048-1.1919,2.2133-2.3178,3.5484-3.107,5.6219-3.3232,11.6724-5.1431,18.2787-4.582,1.2994,.1104,2.5788,.4572,3.897,.5993-6.1437-2.6604-11.8205-6.0566-16.846-10.1088-.9736,.7062-1.8054,1.4518-2.7587,1.9769-4.6737,2.5744-9.7148,3.5029-15.0118,3.2011-2.9237-.1666-5.8234-.4804-8.5552-1.6184-.7371-.307-1.4633-.724-2.0729-1.2354-1.1068-.9286-1.1746-2.2051-.0376-3.0843,1.0322-.7982,2.217-1.5341,3.4523-1.9124,7.8375-2.3995,15.5691-2.4947,23.0369,1.4126,.0798,.0417,.1798,.0449,.4137,.0996-.2256-.2458-.358-.3976-.4982-.5418-4.0871-4.2063-8.1781-8.4089-12.2586-12.6216-.4948-.5109-.9334-1.0763-1.398-1.6164l-.245-.2414Z" />
                                <path d="M294.0722,359.1591l.245,.2414c.2292,.7814-.309,1.1038-.8787,1.2379-1.9468,.4583-3.8922,1.0549-5.8702,1.2234-6.6476,.5663-12.7582-1.23-18.4279-4.6323-.7387-.4433-1.421-1.0367-2.0011-1.6769-1.4562-1.6073-1.1288-3.1384,.9129-3.834,1.2667-.4316,2.6499-.6888,3.9873-.7172,6.9839-.1481,13.503,1.4038,19.1975,5.6531,1.0072,.7515,1.8931,1.6656,2.8351,2.5046Z" />
                                <path d="M323.7791,199.297c-.7817,.2993-1.5562,.6193-2.3462,.8946-5.0678,1.7663-10.2376,1.9602-15.4111,.681-2.5283-.6251-4.9895-1.572-7.4138-2.5416-.9213-.3685-1.752-1.1168-2.4489-1.8568-1.0069-1.0691-.8562-2.2768,.3894-3.0451,.8917-.55,1.9137-1.0275,2.9355-1.2059,7.9799-1.3931,15.5445-.3949,22.4278,4.1649,.5908,.3914,1.1106,.8899,1.6633,1.3388,.5658,.4596,.6855,.9773,.2037,1.5733l.0004-.0033Z" />
                                <path d="M325.2624,177.5365c6.5237,1.3773,12.3502,4.0451,16.8449,9.1499,.5535,.6287,1.0525,1.3177,1.4926,2.0307,.523,.8474,.414,1.214-.5518,1.3489-1.7218,.2405-3.4751,.4941-5.2015,.4207-7.0278-.2987-13.1019-3.0602-18.4362-7.5306-.7761-.6504-1.4294-1.5148-1.9437-2.3948-.8256-1.4125-.3046-2.6187,1.2611-3.114,1.942-.6143,3.9081-.3489,5.8653-.0336,.2238,.0361,.4461,.0816,.6692,.1228Z" />
                                <path d="M361.7598,186.1346c-6.8473-1.4379-12.2201-5.2288-16.6975-10.4087-1.0268-1.188-1.7966-2.6046-2.6287-3.9506-.2466-.3989-.364-.9069-.4337-1.3807-.2138-1.4541,.4848-2.4999,1.9323-2.3972,1.6488,.1171,3.3711,.4079,4.882,1.0474,6.4023,2.7097,11.6867,6.8033,15.102,13.0055,.5587,1.0145,.9439,2.1278,1.3703,3.2108,.2983,.7575-.0708,1.1203-.8213,1.0873-.9032-.0396-1.8038-.1399-2.7055-.214Z" />
                            </g>
                        </g>
                    </g>
                    <text  transform="translate(119.1299 239.2801) scale(1 .75)" fill="#8c0000" fontFamily="Gotham-Black, 'Gotham Black'" fontSize="52.9144"><tspan x="0" y="0">I</tspan><tspan x="17.3027" y="0" letterSpacing="-.02em">n</tspan><tspan x="49.792" y="0" letterSpacing="-.032em">v</tspan><tspan x="81.1699" y="0">en</tspan><tspan x="146.73" y="0" letterSpacing="-.015em">t</tspan><tspan x="168.7427" y="0">ory</tspan></text>
                </g>
            </svg>
            </Box>
        </Box>
    )
}