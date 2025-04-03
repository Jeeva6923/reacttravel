import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { FaPlus } from "react-icons/fa6";

function Example() {
  const [open, setOpen] = useState(false);
  const [opens,setOpens] = useState(false);
  const [open1,setOpen1] = useState(false);
  const [open2,setOpen2] = useState(false);
  const [open3,setOpen3] = useState(false);
  const [open4,setOpen4] = useState(false);

  return (
    <>
    <div id='whate'>
        <h5 id='whatt'>What does the winery tour include?</h5>
      <Button id='btnaf'
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}>
      <FaPlus />
      </Button></div>
      <Collapse in={open}>
        <div id="example-collapse-text">
          
        Our winery tour includes a guided visit to our vineyard, a tour of the winemaking facilities, a wine tasting session featuring a selection of our finest wines, and an opportunity to purchase wines and merchandise at a discount. Optional add-ons such as a gourmet picnic or private tours are also available
        </div>
      </Collapse>

      <div id='whate'>
    <h5 id='whatt'>What does the winery tour include?</h5>
      <Button id='btnaf'
        onClick={() => setOpens(!opens)}
        aria-controls="example-collapse-text"
        aria-expanded={opens}>
      <FaPlus />
      </Button></div>
      <Collapse in={opens}>
        <div id="example-collapse-text">
          
        Our winery tour includes a guided visit to our vineyard, a tour of the winemaking facilities, a wine tasting session featuring a selection of our finest wines, and an opportunity to purchase wines and merchandise at a discount. Optional add-ons such as a gourmet picnic or private tours are also available
        </div>
      </Collapse>



      <div id='whate'>
    <h5 id='whatt'>What does the winery tour include?</h5>
      <Button id='btnaf'
        onClick={() => setOpen1(!open1)}
        aria-controls="example-collapse-text"
        aria-expanded={open1}>
      <FaPlus />
      </Button></div>
      <Collapse in={open1}>
        <div id="example-collapse-text">
          
        Our winery tour includes a guided visit to our vineyard, a tour of the winemaking facilities, a wine tasting session featuring a selection of our finest wines, and an opportunity to purchase wines and merchandise at a discount. Optional add-ons such as a gourmet picnic or private tours are also available
        </div>
      </Collapse>



      <div id='whate'>
    <h5 id='whatt'>What does the winery tour include?</h5>
      <Button id='btnaf'
        onClick={() => setOpen2(!open2)}
        aria-controls="example-collapse-text"
        aria-expanded={open2}>
      <FaPlus />
      </Button></div>
      <Collapse in={open2}>
        <div id="example-collapse-text">
          
        Our winery tour includes a guided visit to our vineyard, a tour of the winemaking facilities, a wine tasting session featuring a selection of our finest wines, and an opportunity to purchase wines and merchandise at a discount. Optional add-ons such as a gourmet picnic or private tours are also available
        </div>
      </Collapse>



      <div id='whate'>
    <h5 id='whatt'>What does the winery tour include?</h5>
      <Button id='btnaf'
        onClick={() => setOpen3(!open3)}
        aria-controls="example-collapse-text"
        aria-expanded={open3}>
      <FaPlus />
      </Button></div>
      <Collapse in={open3}>
        <div id="example-collapse-text">
          
        Our winery tour includes a guided visit to our vineyard, a tour of the winemaking facilities, a wine tasting session featuring a selection of our finest wines, and an opportunity to purchase wines and merchandise at a discount. Optional add-ons such as a gourmet picnic or private tours are also available
        </div>
      </Collapse>



      <div id='whate'>
    <h5 id='whatt'>What does the winery tour include?</h5>
      <Button id='btnaf'
        onClick={() => setOpen4(!open4)}
        aria-controls="example-collapse-text"
        aria-expanded={open4}>
      <FaPlus />
      </Button></div>
      <Collapse in={open4}>
        <div id="example-collapse-text">
          
        Our winery tour includes a guided visit to our vineyard, a tour of the winemaking facilities, a wine tasting session featuring a selection of our finest wines, and an opportunity to purchase wines and merchandise at a discount. Optional add-ons such as a gourmet picnic or private tours are also available
        </div>
      </Collapse>
    </>
  );
}

export default Example;