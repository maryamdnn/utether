import Component, { PageEl } from '@/components/Libs/Component';
import Copy from '@/components/Libs/Copy';
import Router from 'next/router'
import Window from '@/components/Libs/Window';
import TextBox from '@/components/Libs/TextBox';
import Icon2Titles from '@/components/Libs/Icon2Titles';
import Icon3Titles from '@/components/Libs/Icon3Titles';


export default p => Component(p, Page);
const Page: PageEl = (props, state, refresh, getProps) => {

  let styles = global.styles



  return (
    <div style={{ direction: "rtl", height: "100%", backgroundColor: "#6C8B81" }}>
      <br-x />
      <Window title={"قیمت لحظه ای تتر The current price of Tether"} style={{ width: "50", minHeight: 200, margin: 100, backgroundColor: "#6C8B81" }}>
        <br-xx />
        <br-xx />
        <div style={{
          width: "100", height: 50, backgroundColor: "#5D7A71", borderRadius: 10,
          textAlign: "center"
        }}>
          <br-xx />
          <br-xx />
          <br-xx />
          <br-xx />
          price   :   {props.p.price}
        </div>
        <br-xx />
        <div style={{
          width: "100", height: 50, backgroundColor: "#5D7A71", borderRadius: 10,
          textAlign: "center"
        }}>
          <br-xx />
          <br-xx />
          <br-xx />
          <br-xx />
          لحظه ای     :      {(props.p.price as number).toLocaleString("fa-IR")}
        </div>
        <br-xx />
        <div style={{
          width: "100", height: 50, backgroundColor: "#774141", borderRadius: 10,
          textAlign: "center"
        }}>
          <br-xx />
          <br-xx />
          <br-xx />
          <br-xx />
          تغییرات ۲۴ ساعت   :   {(parseFloat(props.p.diff24d) as number).toLocaleString("fa-IR") + "٪"}
        </div>
        <br-xx />

        <div style={{
          width: "100", height: 50, backgroundColor: "#774141", borderRadius: 10,
          textAlign: "center"
        }}>
          <br-xx />
          <br-xx />
          <br-xx />
          <br-xx />
          تغییرات هفتگی  :   {(parseFloat(props.p.diff7d) as number).toLocaleString("fa-IR") + "٪"}
        </div>

        <br-xx />
        <div style={{
          width: "100", height: 50, backgroundColor: "#774141", borderRadius: 10,
          textAlign: "center"
        }}>
          <br-xx />
          <br-xx />
          <br-xx />
          <br-xx />
          تغییرات ماهانه  :   {(parseFloat(props.p.diff30d) as number).toLocaleString("fa-IR") + "٪"}
        </div>
        <br-xx />
        <center style={{ fontSize: 9 }}>
          تهیه شده توسط تیم پژوهشی هایزنبرگ
        </center>

      </Window>

    </div>
  )
}


export async function getServerSideProps(context) {


  var session = await global.SSRVerify(context)
  var { uid, name, image, imageprop, lang, cchar,
    unit, workspace, servid, servsecret,
    usedquota, quota, quotaunit, status, regdate, expid,
    role, path, devmod, userip, } = session;

  let res = await fetch("https://api.tetherland.com/currencies")
  let data = await res.json()
  let p = data.data.currencies.USDT

  console.log("priceeeeeeeeeeeee:", p)

  return {
    props: {
      data: global.QSON.stringify({
        p,
        session,
        // nlangs,
      })
    },
  }
}