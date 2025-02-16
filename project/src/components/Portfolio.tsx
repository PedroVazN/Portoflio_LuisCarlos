import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Building } from '../types/building';

export const buildings: Building[] = [
  {
    id: 'danubio',
    image: 'https://www.quintoandar.com.br/img/640x0/filters:quality(85)/894538700-267.11607354026864894105471284.5530317658458IMG3075.jpg',
    name: 'Condomínio  Danúbio',
    location: 'Rua Coronel Francisco Inácio, 243, Vila Moinho Velho, São Paulo',
    details: {
      aluguel: 'R$ 1.500,00',
      compra: 'R$ 225.000,00',
      condominio: 'R$ 595,00',
      iptu: 'R$ 200,00/mês',
      areas: ['55m²', '70m²'],
      images: ['https://www.quintoandar.com.br/img/640x0/filters:quality(85)/894538700-267.11607354026864894105471284.5530317658458IMG3075.jpg',
        'https://www.quintoandar.com.br/img/384x0/filters:quality(85)/894536471-846.4075433241162892884074711.7998539530573MG1925.jpeg', 'https://www.quintoandar.com.br/img/384x0/filters:quality(85)/893721763-423.696504017900520220723090325.jpg',
        'https://www.quintoandar.com.br/img/384x0/filters:quality(85)/893721763-423.696504017900520220723090325.jpg', 'https://www.quintoandar.com.br/img/384x0/filters:quality(85)/893721763-342.5503272041139620220723090308.jpg', 'https://www.quintoandar.com.br/img/384x0/filters:quality(85)/893721763-342.5503272041139620220723090308.jpg',
        'https://www.quintoandar.com.br/img/xxl/894538700-982.9710453424715QuintoAndar356.jpg', 'https://www.quintoandar.com.br/img/xxl/894538700-472.7074489194497QuintoAndar355.jpg',
        'https://www.quintoandar.com.br/img/xxl/894538700-286.8006721129924QuintoAndar339.jpg',
        'https://www.quintoandar.com.br/img/xxl/894379181-545.2546547790432893721763423.696504017900520220723090325.jpg',
        'https://www.quintoandar.com.br/img/xxl/893364257-162.16130378247195893287730240.06307268149374IMG8726.jpg',
        'https://www.quintoandar.com.br/img/xxl/893693428-158.88329022874814IMG1923.jpg',
        'https://www.quintoandar.com.br/img/xxl/894538700-714.6437116230449893693428158.88329022874814IMG1923.jpg',
        'https://www.quintoandar.com.br/img/xxl/894536471-75.03397882994156893693428158.88329022874814IMG1923.jpg',
        'https://www.quintoandar.com.br/img/xxl/893905187-43.26144961061862893721763423.696504017900520220723090325.jpg',
        'https://www.quintoandar.com.br/img/xxl/894379181-545.2546547790432893721763423.696504017900520220723090325.jpg',
        'https://www.quintoandar.com.br/img/xxl/893364257-162.16130378247195893287730240.06307268149374IMG8726.jpg',
        'https://www.quintoandar.com.br/img/xxl/893693428-158.88329022874814IMG1923.jpg',
        'https://www.quintoandar.com.br/img/xxl/894538700-714.6437116230449893693428158.88329022874814IMG1923.jpg',
        'https://www.quintoandar.com.br/img/xxl/893905187-43.26144961061862893721763423.696504017900520220723090325.jpg',
        'https://www.quintoandar.com.br/img/xxl/894538700-590.2512192590289892884074328.86657920413256MG1922.jpeg',
        'https://www.quintoandar.com.br/img/xxl/894536471-734.1884071691616892884074328.86657920413256MG1922.jpeg',
        'https://www.quintoandar.com.br/img/xxl/894538700-470.286286923413889410547124.3824204597739IMG3071.jpg',
        'https://www.quintoandar.com.br/img/xxl/894538700-284.9051207229494892975442472.9269441827019611102019MG2549.jpg',
        'https://www.quintoandar.com.br/img/xxl/894538700-221.6978480709989892975442765.896344317276511102019MG2538.jpg',
        'https://www.quintoandar.com.br/img/xxl/894536471-25.32540527882865892975442765.896344317276511102019MG2538.jpg',
        'https://www.quintoandar.com.br/img/xxl/894379181-842.9033884287237893721763342.5503272041139620220723090308.jpg',
        'https://www.quintoandar.com.br/img/xxl/894538700-140.8750971534306892975442588.752403106952311102019MG2537.jpg',
        'https://www.quintoandar.com.br/img/xxl/894538700-341.70505228032187892975442444.5563987578131611102019MG2539.jpg',
        'https://www.quintoandar.com.br/img/xxl/894536471-462.07250361143815892975442444.5563987578131611102019MG2539.jpg',
        'https://www.quintoandar.com.br/img/xxl/893470263-733.2745928877158foto48.jpg',
        'https://www.quintoandar.com.br/img/xxl/893470263-575.3611477069431foto47.jpg',
        'https://www.quintoandar.com.br/img/xxl/893457820-665.2575930107902Tratadas7655.jpg',
        'https://www.quintoandar.com.br/img/xxl/892975442-113.0601996923724611102019MG2540.jpg',
        'https://www.quintoandar.com.br/img/xxl/894538700-820.1260563791246893457820665.2575930107902Tratadas7655.jpg',
        'https://www.quintoandar.com.br/img/xxl/894379181-582.08300176608892975442113.0601996923724611102019MG2540.jpg',
        'https://www.quintoandar.com.br/img/xxl/894538700-468.86147810831227894105471212.97036143931115IMG3064.jpg',
        'https://www.quintoandar.com.br/img/xxl/894536471-244.93297328413894105471212.97036143931115IMG3064.jpg',
        'https://www.quintoandar.com.br/img/xxl/894105471-243.78778562493864IMG3065.jpg',
        'https://www.quintoandar.com.br/img/xxl/894105471-499.71817534453123IMG3066.jpg',
        'https://www.quintoandar.com.br/img/xxl/893905187-701.508978146897893470263839.3729813030521foto42.jpg',
        'https://www.quintoandar.com.br/img/xxl/893693428-118.08872547581994IMG1928.jpg',
        'https://www.quintoandar.com.br/img/xxl/892884074-781.181085669601MG1926.JPG',
        'https://www.quintoandar.com.br/img/xxl/892884074-711.7998539530573MG1925.JPG'
      ]
    }
  },
  {
    id: 'artdesign',
    image: 'https://www.quintoandar.com.br/img/xxl/894718550-130.2862234825836769.jpg',
    name: 'Condomínio ART DESIGN',
    location: 'Rua Assungui, 831, Alto do Ipiranga, São Paulo',
    details: {
      aluguel: 'R$ 2.200,00',
      compra: 'R$ 440.000,00',
      condominio: 'R$ 773,00',
      iptu: 'R$ 281,00/mês',
      areas: ['48m²', '50m²'],
      images: ['https://www.quintoandar.com.br/img/xxl/894718550-130.2862234825836769.jpg',
        'https://www.quintoandar.com.br/img/xxl/894668045-689.9487109789297894298531483.53708105570416DSC0250.jpg',
        'https://www.quintoandar.com.br/img/xxl/894668045-396.043655456659894298531483.53708105570416DSC0250.jpg',
        'https://www.quintoandar.com.br/img/xxl/894718550-358.874275981302668.jpg',
        'https://www.quintoandar.com.br/img/xxl/894718550-98.6389505518722167.jpg',
        'https://www.quintoandar.com.br/img/xxl/894718550-415.5713128528143466.jpg',
        'https://www.quintoandar.com.br/img/xxl/893086768-491.1669541110796IMG20200630WA0025.jpg',
        'https://www.quintoandar.com.br/img/xxl/893086768-572.0272761267198IMG20200630WA0022.jpg',
        'https://www.quintoandar.com.br/img/xxl/894298531-931.9034927621062DSC0239.jpg',
        'https://www.quintoandar.com.br/img/xxl/893075207-948.2790294163427WhatsAppImage20200524at12.36.29.jpeg',
        'https://www.quintoandar.com.br/img/xxl/894298531-435.39502761977053DSC0249.jpg',
        'https://www.quintoandar.com.br/img/xxl/893052901-797.2501582825602IMG9762.jpg',
        'https://www.quintoandar.com.br/img/xxl/893052901-969.0747410721344IMG9761.jpg',
        'https://www.quintoandar.com.br/img/xxl/894298531-564.1468850058858DSC0238.jpg',
        'https://www.quintoandar.com.br/img/xxl/894298531-301.17562049645863DSC0237.jpg',
        'https://www.quintoandar.com.br/img/xxl/894298531-785.5088683516973DSC0248.jpg',
        'https://www.quintoandar.com.br/img/xxl/894298531-723.3706865451552DSC0247.jpg',
        'https://www.quintoandar.com.br/img/xxl/893538139-318.00051940774057IMG4453.jpg',
        'https://www.quintoandar.com.br/img/xxl/894298531-227.99104886888443DSC0245.jpg',
        'https://www.quintoandar.com.br/img/xxl/893538139-872.3744443375292IMG4454.jpg',
        'https://www.quintoandar.com.br/img/xxl/894298531-948.3664476952462DSC0243.jpg',
        'https://www.quintoandar.com.br/img/xxl/893538139-218.5111068161264IMG4455.jpg',
        'https://www.quintoandar.com.br/img/xxl/893461278-996.2665579177634foto55.jpg',
        'https://www.quintoandar.com.br/img/xxl/894298531-714.5804573159792DSC0240.jpg',
        'https://www.quintoandar.com.br/img/xxl/893538139-984.7034141230644IMG4450.jpg',
        'https://www.quintoandar.com.br/img/xxl/893086768-633.8596206521797IMG20200630WA0062.jpg',
        'https://www.quintoandar.com.br/img/xxl/894298531-770.6067845058739DSC0244.jpg',
        'https://www.quintoandar.com.br/img/xxl/893086768-77.95577520159347IMG20200630WA0045.jpg',
        'https://www.quintoandar.com.br/img/xxl/893461278-597.884377281001foto56.jpg',
        'https://www.quintoandar.com.br/img/xxl/894298531-534.8389640022071DSC0242.jpg',
        'https://www.quintoandar.com.br/img/xxl/893538139-32.98264645340387IMG4451.jpg',
        'https://www.quintoandar.com.br/img/xxl/893461278-394.4711341254814foto54.jpg',
        'https://www.quintoandar.com.br/img/xxl/893461278-959.1101340422186foto46.jpg',
        'https://www.quintoandar.com.br/img/xxl/893461278-608.6653840595075foto45.jpg',
        'https://www.quintoandar.com.br/img/xxl/894298531-655.7729243365479DSC0241.jpg',
        'https://www.quintoandar.com.br/img/xxl/893086768-160.32643867449804IMG20200630WA0018.jpg',
        'https://www.quintoandar.com.br/img/xxl/894298531-554.5007032206992DSC0246.jpg'
      ]
    }
  },
  {
    id: 'valedosol',
    image: 'https://www.quintoandar.com.br/img/xxl/894612851-726.8306569811137893892331718.9392800480296103.jpg',
    name: 'Condomínio VALE DO SOL',
    location: 'Rua Abagiba, 1200, Vila da Saúde, São Paulo',
    details: {
      aluguel: 'R$ 2.200,00',
      compra: 'R$ 530.000,00',
      condominio: 'R$ 900,00',
      iptu: 'R$ 171,00/mês',
      areas: ['84m²', '159m²'],
      images: ['https://www.quintoandar.com.br/img/xxl/894612851-726.8306569811137893892331718.9392800480296103.jpg',
        'https://www.quintoandar.com.br/img/xxl/893892331-718.9392800480296103.jpg',
        'https://www.quintoandar.com.br/img/xxl/894404178-873.2452733614364IMG0183.jpg',
        'https://www.quintoandar.com.br/img/xxl/893691533-887.457681890668893645429642.1196059514507893620323915.4946045742932QuintoAndar131.jpg',
        'https://www.quintoandar.com.br/img/xxl/893645429-642.1196059514507893620323915.4946045742932QuintoAndar131.jpg',
        'https://www.quintoandar.com.br/img/xxl/894612851-92.03138007336553893645429642.1196059514507893620323915.4946045742932QuintoAndar131.jpg',
        'https://www.quintoandar.com.br/img/xxl/894612851-92.03138007336553893645429642.1196059514507893620323915.4946045742932QuintoAndar131.jpg',
        'https://www.quintoandar.com.br/img/xxl/893691533-179.99711572693934893645429447.7363618202622389362032348.8361997464849QuintoAndar113.jpg',
        'https://www.quintoandar.com.br/img/xxl/893695162-405.44376391444183IMG2236.jpg',
        'https://www.quintoandar.com.br/img/xxl/893436072-744.23104951824989334467652.66897517172886IMG5227.jfif',
        'https://www.quintoandar.com.br/img/xxl/894612851-433.39219197800935893222661827.7548028280322QuintoAndar57.jpg',
        'https://www.quintoandar.com.br/img/xxl/894000672-138.78441623156525893695162405.44376391444183IMG2236.jpg',
        'https://www.quintoandar.com.br/img/xxl/893412440-646.9928010093928IMG3495.jpg',
        'https://www.quintoandar.com.br/img/xxl/893222661-827.7548028280322QuintoAndar57.jpg',
        'https://www.quintoandar.com.br/img/xxl/893892331-215.3654795577501102.jpg',
        'https://www.quintoandar.com.br/img/xxl/893892331-480.75234445831103101.jpg',
        'https://www.quintoandar.com.br/img/xxl/893892331-621.0963916133707100.jpg',
        'https://www.quintoandar.com.br/img/xxl/894612851-953.9606433077332894000672999.9078354332493893695162712.0792818371749IMG2215.jpg',
        'https://www.quintoandar.com.br/img/xxl/894261776-869.2499058417505893729414566.3005018338463IMG5279.jpg',
        'https://www.quintoandar.com.br/img/xxl/894000672-999.9078354332493893695162712.0792818371749IMG2215.jpg',
        'https://www.quintoandar.com.br/img/xxl/894612851-662.136416386951893691533994.4431505203711893645429608.0527409384446893620323526.3872682547338893208127643.068316421781DSC0052.jpg',
        'https://www.quintoandar.com.br/img/xxl/893691533-463.08811743499433893645429901.7963961078062893620323422.9364693608486893412440949.0885301831047IMG3498.jpg',
        'https://www.quintoandar.com.br/img/xxl/894612851-242.6952990990810489400067262.1826981755103789369153363.395198914239174QuintoAndar216.jpg',
        'https://www.quintoandar.com.br/img/xxl/893691533-974.340162257006QuintoAndar217.jpg',
        'https://www.quintoandar.com.br/img/xxl/894612851-573.8493977566146893695162693.2421638265181IMG2222.jpg',
        'https://www.quintoandar.com.br/img/xxl/894000672-384.5936952853204893691533597.7617321137999893645429773.0499569837132893620323102.39519820738462QuintoAndar130.jpg',
        'https://www.quintoandar.com.br/img/xxl/894612851-418.57148649131483893695162402.83691664284305IMG2225.jpg',
        'https://www.quintoandar.com.br/img/xxl/893691533-314.32617961263134893645429982.6609024305408893620323623.2347122905783QuintoAndar114.jpg',
        'https://www.quintoandar.com.br/img/xxl/894261776-476.6224119871888893222661483.54489646038377893208127478.14280017605506DSC0056.jpg',
        'https://www.quintoandar.com.br/img/xxl/894000672-888.207038084717893222661483.54489646038377893208127478.14280017605506DSC0056.jpg',
        'https://www.quintoandar.com.br/img/xxl/893695162-699.965769859576IMG2223.jpg',
        'https://www.quintoandar.com.br/img/xxl/893691533-882.0555847047939893645429146.1758824311532893620323815.8176548623691QuintoAndar125.jpg',
        'https://www.quintoandar.com.br/img/xxl/894612851-774.6016443546864893695162112.20007413594846IMG2229.jpg',
        'https://www.quintoandar.com.br/img/xxl/893695162-773.9683264950685IMG2230.jpg',
        'https://www.quintoandar.com.br/img/xxl/893695162-442.4151902927199IMG2226.jpg',
        'https://www.quintoandar.com.br/img/xxl/893691533-139.65335940886325893645429875.3050266318069893620323829.0349669066621QuintoAndar119.jpg',
        'https://www.quintoandar.com.br/img/xxl/893691533-558.0148568393188893645429467.10874082260034893620323113.61564645939681QuintoAndar117.jpg',
        'https://www.quintoandar.com.br/img/xxl/893695162-995.8130991348143IMG2227.jpg',
        'https://www.quintoandar.com.br/img/xxl/893436072-295.5939104889308893222661565.6947829901295QuintoAndar60.jpg',
        'https://www.quintoandar.com.br/img/xxl/893222661-242.45724180261698QuintoAndar63.jpg',
        'https://www.quintoandar.com.br/img/xxl/894612851-202.3495512001888893691533115.10177899872387893645429608.7251544270038893620323314.83409800306794QuintoAndar121.jpg',
        'https://www.quintoandar.com.br/img/xxl/893695162-100.55215641226IMG2228.jpg',
        'https://www.quintoandar.com.br/img/xxl/893691533-115.10177899872387893645429608.7251544270038893620323314.83409800306794QuintoAndar121.jpg',
        'https://www.quintoandar.com.br/img/xxl/894612851-716.4035855113327894000672612.6586619470454893645429832.3546641386667893620323365.3672242685139893208127254.65884288333507DSC0049.jpg',
        'https://www.quintoandar.com.br/img/xxl/894261776-870.823656989842289420849230.38567432831696FT63.jpg',
        'https://www.quintoandar.com.br/img/xxl/894612851-399.8891831215883893695162685.0452421229617IMG2217.jpg',
        'https://www.quintoandar.com.br/img/xxl/893582894-197.3524227784299QuintoAndar58de77.jpg'
      ]
    }
  },
  {
    id: 'ibiza',
    image: 'https://www.quintoandar.com.br/img/xxl/894650722-660.7953564704208WhatsAppImage20241012at14.23.45.jpeg',
    name: 'Condomínio Residencial Ibiza',
    location: 'Rua Dom Pedro Silva, 177, Vila Gumercindo, São Paulo',
    details: {
      aluguel: 'R$ 1.700,00',
      compra: 'R$ 310.000,00',
      condominio: 'R$ 297,00',
      iptu: 'R$ 117,00/mês',
      areas: ['43', '49'],
      images: [
        'https://www.quintoandar.com.br/img/xxl/894712122-210.2639326424376MCD4607.jpg',
        'https://www.quintoandar.com.br/img/xxl/894650722-660.7953564704208WhatsAppImage20241012at14.23.45.jpeg',
        'https://www.quintoandar.com.br/img/xxl/894589837-471.182147631402350.jpg',
        'https://www.quintoandar.com.br/img/xxl/894549079-108.02973870059984DSC6005.jpg',
        'https://www.quintoandar.com.br/img/xxl/894532070-366.8431697649721DSC6005.jpg',
        'https://www.quintoandar.com.br/img/xxl/894269453-50.792685665123514DSC5992.jpg',
        'https://www.quintoandar.com.br/img/xxl/894650722-802.5872025491525MCD3201.jpg',
        'https://www.quintoandar.com.br/img/xxl/894269453-244.96866674561224DSC5994.jpg',
        'https://www.quintoandar.com.br/img/xxl/894332959-47.21619531344279FTQA31.jpg',
        'https://www.quintoandar.com.br/img/xxl/894065070-869.1543384475344IMG0188.jpg',
        'https://www.quintoandar.com.br/img/xxl/893798991-439.59922261386697DSC1903.jpg',
        'https://www.quintoandar.com.br/img/xxl/893798991-95.55714490510758DSC1901.jpg',
        'https://www.quintoandar.com.br/img/xxl/894650722-30.03829173742123MCD3205.jpg',
        'https://www.quintoandar.com.br/img/xxl/894650722-266.4802132918659MCD3204.jpg',
        'https://www.quintoandar.com.br/img/xxl/893798991-739.6617127589712DSC1906.jpg',
        'https://www.quintoandar.com.br/img/xxl/894650722-934.3203486803475894269453244.96866674561224DSC5994.jpg',
        'https://www.quintoandar.com.br/img/xxl/894650722-758.150946119254893798991739.6617127589712DSC1906.jpg'
      ]
    }
  },
  {
    id: 'montjuic',
    image: 'https://lh3.googleusercontent.com/p/AF1QipPlQ6kPsmHrejGVkAglfCZhH5DXtf6TJ7HK8AfA=s1360-w1360-h1020',
    name: 'Residencial Montjuic Plaza',
    location: 'Rua Pantojo, 917, Vila Regente Feijó, São Paulo',
    details: {
      aluguel: 'R$ 1.600,00',
      compra: 'R$ 220.000,00',
      condominio: 'R$ 1.068,00',
      iptu: 'R$ 167,00/mês',
      areas: ['34m²', '189m²'],
      images: ['https://www.quintoandar.com.br/img/xxl/894240642-862.3401995586079WhatsAppImage20230916at11.13.02.jpeg',
        'https://www.quintoandar.com.br/img/xxl/894187567-846.6590471802497WhatsAppImage20230806at23.51.244.jpeg',
        'https://www.quintoandar.com.br/img/xxl/894468450-591.0730805853515IMG20240420104235042HDRedited.jpg',
        'https://www.quintoandar.com.br/img/xxl/894468450-863.8987697866115IMG20240420104224020HDRedited.jpg',
        'https://www.quintoandar.com.br/img/xxl/893018496-261.19888331372886fachada.jpg',
        'https://www.quintoandar.com.br/img/xxl/894187567-928.5187810516713WhatsAppImage20230806at23.52.21.jpeg',
        'https://www.quintoandar.com.br/img/xxl/894187567-789.0766201781684WhatsAppImage20230806at23.52.212.jpeg',
        'https://www.quintoandar.com.br/img/xxl/894187567-120.23193416980693WhatsAppImage20230806at23.52.211.jpeg',
        'https://www.quintoandar.com.br/img/xxl/892820645-757.5062309294714IMG3516.jpg',
        'https://www.quintoandar.com.br/img/xxl/892794696-573.6345902277209MG0042.jpg',
        'https://www.quintoandar.com.br/img/xxl/893252565-839.1977803743123DSC0008.jpg',
        'https://www.quintoandar.com.br/img/xxl/893252565-298.30048789090046DSC0007.jpg',
        'https://www.quintoandar.com.br/img/xxl/894187567-95.41867180247831WhatsAppImage20230806at23.52.213.jpeg',
        'https://www.quintoandar.com.br/img/xxl/893252565-222.75655537644613DSC0012.jpg',
        'https://www.quintoandar.com.br/img/xxl/893252565-268.8346794632164DSC0009.jpg',
        'https://www.quintoandar.com.br/img/xxl/893252565-622.9667032111219DSC0019.jpg',
        'https://www.quintoandar.com.br/img/xxl/893252565-443.37232946772565DSC0018.jpg',
        'https://www.quintoandar.com.br/img/xxl/892820645-72.33403751804413IMG3523.jpg',
        'https://www.quintoandar.com.br/img/xxl/893378024-899.673787389099924Playground.jpg',
        'https://www.quintoandar.com.br/img/xxl/893252565-37.4589806470792DSC0017.jpg',
        'https://www.quintoandar.com.br/img/xxl/892820645-865.1830309624429IMG3520.jpg',
        'https://www.quintoandar.com.br/img/xxl/893378024-896.610273032065425Quadra.jpg',
        'https://www.quintoandar.com.br/img/xxl/892820645-764.1972832830356IMG3517.jpg',
        'https://www.quintoandar.com.br/img/xxl/892794696-747.7012025673703MG0043.jpg',
        'https://www.quintoandar.com.br/img/xxl/893018496-835.6782170865669IMG6893.jpg',
        'https://www.quintoandar.com.br/img/xxl/893222854-859.6421007939532Pantojo112.jpg',
        'https://www.quintoandar.com.br/img/xxl/893272227-824.2977917879223LUI3445.jpg',
        'https://www.quintoandar.com.br/img/xxl/893378024-457.5952012091709722Churrasqueira.jpg',
        'https://www.quintoandar.com.br/img/xxl/893252565-350.13370173768254DSC0015.jpg',
        'https://www.quintoandar.com.br/img/xxl/892820645-547.3993131844243IMG3513.jpg',
        'https://www.quintoandar.com.br/img/xxl/892794696-896.9392500087442MG0049.jpg',
        'https://www.quintoandar.com.br/img/xxl/893378024-675.728435118472428Salodefestas3.jpg',
        'https://www.quintoandar.com.br/img/xxl/893378024-425.0236215118933426Salodefestas1.jpg',
        'https://www.quintoandar.com.br/img/xxl/893252565-240.10436611513563DSC0013.jpg',
        'https://www.quintoandar.com.br/img/xxl/893252565-652.4650314921445DSC0011.jpg',
        'https://www.quintoandar.com.br/img/xxl/893252565-49.575656130785184DSC0010.jpg',
        'https://www.quintoandar.com.br/img/xxl/894063359-483.7427384848113AL7428.jpg',
        'https://www.quintoandar.com.br/img/xxl/894063359-123.11144163135135AL7427.jpg'
      ]
    }
  },
  {
    id: 'cavalcanti',
    image: 'https://www.quintoandar.com.br/img/xxl/894707367-709.6856068451926DSC9336.JPG',
    name: 'Condomínio Edifício Cavalcanti',
    location: 'Avenida Bosque da Saúde, 207, Vila da Saúde, São Paulo',
    details: {
      aluguel: 'R$ 1.742,00',
      compra: 'R$ 320.000,00',
      condominio: 'R$ 487,00',
      iptu: 'R$ 67,00/mês',
      areas: ['25m²', '30m²'],
      images: ['https://www.quintoandar.com.br/img/xxl/894707367-709.6856068451926DSC9336.JPG',
        'https://www.quintoandar.com.br/img/xxl/894707366-662.4320217115161DSC3141.jpg',
        'https://www.quintoandar.com.br/img/xxl/894703635-404.775498349413741000006797.jpg',
        'https://www.quintoandar.com.br/img/xxl/894703635-409.12622294822551000006799.jpg',
        'https://www.quintoandar.com.br/img/xxl/894703635-177.710646606485821000006800.jpg',
        'https://www.quintoandar.com.br/img/xxl/894707367-868.0407163212868DSC9330.JPG',
        'https://www.quintoandar.com.br/img/xxl/894707366-335.06928117319137DSC9330.JPG',
        'https://www.quintoandar.com.br/img/xxl/894707366-335.06928117319137DSC9330.JPG',
        'https://www.quintoandar.com.br/img/xxl/894692815-233.5133428140996419596576059636255209661.jpg',
        'https://www.quintoandar.com.br/img/xxl/894692815-474.8062115237271419596576059636255209660.jpg',
        'https://www.quintoandar.com.br/img/xxl/894692815-564.021963363599119596576059636255209659.jpg',
        'https://www.quintoandar.com.br/img/xxl/894704533-83.31992698369184J4B0110.jpg',
        'https://www.quintoandar.com.br/img/xxl/894704533-65.82874832096563J4B0109.jpg',
        'https://www.quintoandar.com.br/img/xxl/894703635-269.191728385677271000006796.jpg',
        'https://www.quintoandar.com.br/img/xxl/894703637-64.956654909185231000006796.jpg',
        'https://www.quintoandar.com.br/img/xxl/894703642-99.460720928890911000006796.jpg',
        'https://www.quintoandar.com.br/img/xxl/894704533-472.6835620952503J4B0089.jpg'
      ]
    }
  }
];

const Portfolio = () => {
  const navigate = useNavigate();

  const handleBuildingClick = (building: Building) => {
    navigate(`/portfolio/${building.id}`);
  };

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900">Imóveis sindicados por Luis Carlos</h2>
          <p className="mt-4 text-xl text-gray-600">
            Conheça alguns dos empreendimentos que confiam em nossa gestão
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {buildings.map((building, index) => (
            <motion.div
              key={building.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
              onClick={() => handleBuildingClick(building)}
            >
              <div className="relative h-64">
                <img
                  src={building.image}
                  alt={building.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {building.name}
                </h3>
                <p className="text-gray-600 mb-1">Localização: {building.location}</p>
                <p className="text-blue-600 font-medium mt-4 group-hover:underline">
                  Ver detalhes →
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;