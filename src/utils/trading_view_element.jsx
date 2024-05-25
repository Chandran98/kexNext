"use client"
import { Ticker, CopyrightStyles } from "react-ts-tradingview-widgets";
import { AdvancedRealTimeChart ,TechnicalAnalysis} from "react-ts-tradingview-widgets";
export const Example = () => {
  const styles = {
    parent: {
      fontSize: "24px",
      color: "red",
    },
    link: {
      textDecoration: "line-trough",
    },
    span: {
      color: "darkblue",
    },
  };
  return <>
  {/* <Ticker colorTheme="dark" copyrightStyles={styles} /> */}


  <AdvancedRealTimeChart theme="dark" symbol="BTCUSDT" ></AdvancedRealTimeChart>
  <TechnicalAnalysis colorTheme="dark" symbol="BTCUSDT" width="100%"></TechnicalAnalysis>

  </> 
};

export default Example



// Refer from this page

// https://tradingview-widgets.jorrinkievit.xyz/docs/components/CryptoCoinsHeatmap