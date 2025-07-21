
import React from "react";
// index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Navbar} from './Navbar';
import { Footer } from './footer';
import './faqsstyle.css';

<link rel="stylesheet" href="	https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"></link>
 



export const Faqs = () =>{
    return(
    <div>
<Navbar />

    
        <div className="container-fluid" style={{ background: 'rgb(29, 25, 24)', padding: '60px' }}>
          <h1 className="text-center mb-4"><span className=" highlight">FAQ's</span></h1>
            
        <div className="accordion" id="accordionExample">
  <div className="accordion-item mb-3" style={{background: '#1D1918'}}>
    <h2 className="accordion-header" style={{backgroundColor:"#FFEEE6"}}>
      <button
        className="accordion-button custom-accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne"
        style={{background: '#1D1918'}}
      >
        How does Tarana ensure seamless collaboration among artists?
      </button>
    </h2>
    <div
      id="collapseOne"
      className="accordion-collapse collapse show"
      data-bs-parent="#accordionExample"
        style={{background: '#1D1918'}}
    >
      <div className="accordion-body">
        <strong>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</strong>
        It is shown by Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
      </div>
    </div>
  </div>
</div>

<div className="accordion" id="accordionExample">
  <div className="accordion-item mb-3" style={{ background: 'rgb(29, 25, 24)' }}>
    <h2 className="accordion-header"style={{ background: 'rgb(29, 25, 24)' }}>
      <button
        className="accordion-button custom-accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseTwo"
        aria-expanded="true"
        aria-controls="collapseTwo"
        style={{ background: 'rgb(29, 25, 24)' }}
      >
        How does Tarana ensure seamless collaboration among artists?
      </button>
    </h2>
    <div
      id="collapseTwo"
      className="accordion-collapse collapse show"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body">
        <strong>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</strong>
        It is shown by Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
      </div>
    </div>
  </div>
</div>

<div className="accordion" id="accordionExample">
  <div className="accordion-item mb-3"  style={{ background: 'rgb(29, 25, 24)' }}>
    <h2 className="accordion-header"  style={{ background: 'rgb(29, 25, 24)' }}>
      <button
        className="accordion-button custom-accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseThree"
        aria-expanded="true"
        aria-controls="collapseThree"
         style={{ background: 'rgb(29, 25, 24)' }}
      >
        How does Tarana ensure seamless collaboration among artists?
      </button>
    </h2>
    <div
      id="collapseThree"
      className="accordion-collapse collapse show"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body">
        <strong>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</strong>
        It is shown by Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
      </div>
    </div>
  </div>
</div>

<div className="accordion" id="accordionExample">
  <div className="accordion-item mb-3"  style={{ background: 'rgb(29, 25, 24)' }}>
    <h2 className="accordion-header"  style={{ background: 'rgb(29, 25, 24)' }}>
      <button
        className="accordion-button custom-accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne"
         style={{ background: 'rgb(29, 25, 24)' }}
      >
        How does Tarana ensure seamless collaboration among artists?
      </button>
    </h2>
    <div
      id="collapseOne"
      className="accordion-collapse collapse show"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body">
        <strong>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</strong>
        It is shown by Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
      </div>
    </div>
  </div>
</div>

<div className="accordion" id="accordionExample">
  <div className="accordion-item mb-3"  style={{ background: 'rgb(29, 25, 24)' }}>
    <h2 className="accordion-header"  style={{ background: 'rgb(29, 25, 24)' }}>
      <button
        className="accordion-button custom-accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseTwo"
        aria-expanded="true"
        aria-controls="collapseTwo"
         style={{ background: 'rgb(29, 25, 24)' }}
      >
        How does Tarana ensure seamless collaboration among artists?
      </button>
    </h2>
    <div
      id="collapseTwo"
      className="accordion-collapse collapse show"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body">
        <strong>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</strong>
        It is shown by Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
      </div>
    </div>
  </div>
</div>

<div className="accordion" id="accordionExample">
  <div className="accordion-item mb-3"  style={{ background: 'rgb(29, 25, 24)' }}>
    <h2 className="accordion-header"  style={{ background: 'rgb(29, 25, 24)' }}>
      <button
        className="accordion-button custom-accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseThree"
        aria-expanded="true"
        aria-controls="collapseThree"
         style={{ background: 'rgb(29, 25, 24)' }}
      >
        How does Tarana ensure seamless collaboration among artists?
      </button>
    </h2>
    <div
      id="collapseThree"
      className="accordion-collapse collapse show"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body">
        <strong>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</strong>
        It is shown by Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
      </div>
    </div>
  </div>
</div>

<div className="accordion" id="accordionExample">
  <div className="accordion-item mb-3"  style={{ background: 'rgb(29, 25, 24)' }}>
    <h2 className="accordion-header"  style={{ background: 'rgb(29, 25, 24)' }}>
      <button
        className="accordion-button custom-accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne"
         style={{ background: 'rgb(29, 25, 24)' }}
      >
        How does Tarana ensure seamless collaboration among artists?
      </button>
    </h2>
    <div
      id="collapseOne"
      className="accordion-collapse collapse show"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body">
        <strong>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</strong>
        It is shown by Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
      </div>
    </div>
  </div>
</div>

<div className="accordion" id="accordionExample">
  <div className="accordion-item mb-3"  style={{ background: 'rgb(29, 25, 24)' }}>
    <h2 className="accordion-header"  style={{ background: 'rgb(29, 25, 24)' }}>
      <button
        className="accordion-button custom-accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseTwo"
        aria-expanded="true"
        aria-controls="collapseTwo"
         style={{ background: 'rgb(29, 25, 24)' }}
      >
        How does Tarana ensure seamless collaboration among artists?
      </button>
    </h2>
    <div
      id="collapseTwo"
      className="accordion-collapse collapse show"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body">
        <strong>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</strong>
        It is shown by Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
      </div>
    </div>
  </div>
</div>

</div>

<Footer />  
</div>




    );
};