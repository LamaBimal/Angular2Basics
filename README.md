# Angular2Basics
Examples with basic flow 
<h3>Module Systems:</h3>
<br>
<p>
  web browsers have no concepts of modules or import, they just know how to load javascript code.
  We need a way to bring in a javascript module to start using it from other javascript code. This is where module loader comes in.
  </p>
 <br/><b> Module Loader</b>
<ul>
<li>Require JS</li>
<li>System Js </li>
<li>Web Pack</li>
</ul>
<h4>Loading a module from a browser </h4>

&lt;script src="/node_module/systemJs/dist/system.js&gt;&lt;/script&gt;<br/>
&lt;script&gt;
<pre>
       var promise = system.import('app').then(function(){
          console.log("Angular 2 is running ..")
       }).then(null,function(error){</br>
           console.log("Failed to load module..")
       });
     </pre>  
&lt;/script&gt;

Here,<b>&nbsp;app&nbsp;</b> is the main module.
