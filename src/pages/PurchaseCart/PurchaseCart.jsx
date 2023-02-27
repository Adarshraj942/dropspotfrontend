import React, { useEffect, useState } from "react";
import Adminnavbar from "../Adminnavbar/Adminnavbar";
import Sidebar from "../Sidebar/Sidebar";
import "./PurchaseCart.css";

import "bootstrap/dist/css/bootstrap.css";
import { Tab } from "@headlessui/react";
import { useHistory } from "react-router-dom";
function PurchaseCart() {
  const [tabSelected, setTabSelected] = useState(null);

  const history = useHistory();
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");

    if (userInfo) {
      history.push("/PurchaseCart");
    } else {
      history.push("/signin");
    }
  }, []);

  const tabheader = {
    backgroundColor: "#FFE51A",
    borderColor: "transparent",
    border: " 0.5px solid rgba(0, 0, 0, 0.25)",
    width: "auto",
    padding: "10px",
    fontWeight: "800",
    height: "50px",
    alignItems: "center",
    borderRadius: "10px",
    margin: "15px 5px 15px 5px",
  };

  const buttonheader = {
    backgroundColor: "#FDE31A",
    borderRadius: "15px",
    width: "auto",
    alignItems: "center",
    height: "80px",
    alignSelf: "center",
  };

  const tabpanls = {
    padding: "30px",
  };
  const handelTabCLick = (e) => {
    setTabSelected(e);
  };
  return (
    <div>
      <div>
        <Adminnavbar />
      </div>
      <div className="row">
        <div className="col-2"  style={{backgroundColor:'#31343A'}}>
          <Sidebar />
        </div>
        <div className="col-10">
       
          <div
            className="container"
            id="tabcontainer"
            style={{
              margin: "20px 0px 20px 10px",
              width: "1100px",
              padding: "20px",
            }}
          >
             <div className='headingAll'><h2>Purchase Cart</h2></div>
            
            <Tab.Group>
              <div className="conatiner" style={buttonheader}>
               

                <Tab.List className="tablist">
                  <Tab
                    className={`tabbtn ${tabSelected === 1 ? "selected-tab" : ""}`}
                    onClick={() => handelTabCLick(1)}
                  >
                   
                    One Price Dropship
                  </Tab>
                  <Tab

                    className={`tabbtn ${tabSelected === 2 ? "selected-tab" : ""}`}
                    onClick={() => handelTabCLick(2)}
                  >

                   
                    Wholeshale
                  </Tab>
                  <Tab
                    className={`tabbtn ${tabSelected === 3 ? "selected-tab" : ""}`}
                    onClick={() => handelTabCLick(3)}
                  >
                     
                    Preorder Inventry
                  </Tab>
                </Tab.List>
              </div>

              <Tab.Panels style={tabpanls}>
                <Tab.Panel>
                <div className='Dashboardheading'><h2>   One Price Dropship</h2></div>

                  Content 1</Tab.Panel>
                <Tab.Panel>
                <div className='Dashboardheading'><h2>Warehouse</h2></div>
                  Content 2</Tab.Panel>
                <Tab.Panel>
                <div className='Dashboardheading'><h2>Preorder Inventry</h2></div>
                  Content 3</Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PurchaseCart;
