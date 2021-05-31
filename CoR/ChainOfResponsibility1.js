class HandlerChain 
{ 
   setNextObj(nextObjInChain){}
   processSelection(req){
     console.log("The candidate is not eligible: " + req.getSelection());
   }
} 
  
class Selection
{
  constructor(selection){
    this.selection = selection;
  }
  
  getSelection(){ 
    return this.selection; 
  } 
  
} 
  

class IQPaper extends HandlerChain
{
  constructor(){
    super()
    this.nextObjInChain = new HandlerChain()
  } 
  
  setNextObj(nextObj){ 
    this.nextObjInChain = nextObj; 
  } 
  
  processSelection(req) { 
    if (( req.getSelection() > 30 && req.getSelection()<40)){ 
      console.log("Candidate is passed Tech test." + req.getSelection()); 
    }else{ 
      this.nextObjInChain.processSelection(req); 
    } 
  } 
}


class GKPaper extends HandlerChain 
{ 
  constructor(){
    super()
    this.nextObjInChain = new HandlerChain()
  } 
  
   setNextObj(nextObj){ 
    this.nextObjInChain = nextObj; 
  } 
  
  processSelection(req) 
  { 
    if ((req.getSelection() >= 40 && req.getSelection()<60)) { 
      console.log("Candidate passed both IP Paper and GK test." + req.getSelection()); 
    }else{ 
      this.nextObjInChain.processSelection(req); 
    } 
  } 
}

class Practicle extends HandlerChain 
{ 
  constructor(){
    super()
    this.nextObjInChain = new HandlerChain()
  } 
  
   setNextObj(nextObj){ 
    this.nextObjInChain = nextObj; 
  } 
  
  processSelection(req) 
  { 
    if ((req.getSelection()>=60)) { 
      console.log("Candidate passed Practicle, IP Paper and GK test." + req.getSelection()); 
    }else{ 
      this.nextObjInChain.processSelection(req); 
    } 
  } 
}

//configuring the chain of handler objects
var c1 = new IQPaper(); 
var c2 = new GKPaper(); 
var c3 = new Practicle();

c1.setNextObj(c2); 
c2.setNextObj(c3); 
  
//the chain handling different cases
c1.processSelection(new Selection(95)); 
c1.processSelection(new Selection(42))
c1.processSelection(new Selection(32)); 
c1.processSelection(new Selection(9)); 
