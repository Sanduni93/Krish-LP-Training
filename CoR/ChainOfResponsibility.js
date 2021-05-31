//Handler class 
class HandlerClass 
{ 
   setNextObject(nextObjInSequence){}
   processSelection(request){
     console.log("The candidate is not eligible: " + request.getSelection());
   }
} 

//get the mark and return
  
class Selection
{
  constructor(selection){
    this.selection = selection;
  }
  
  getSelection(){ 
    return this.selection; 
  } 
   
}  

//Handler class1 : IQ Paper
class IQPaper extends HandlerClass
{
  constructor(){
    super();
    this.nextObjInSequence = new HandlerClass();
  } 
  
  setNextObject(nextObjInSequence){ 
    this.nextObjInSequence = nextObjInSequence; 
  } 
  
  processSelection(request) { 
    if (( request.getSelection() > 30 && request.getSelection()<40)){ 
      console.log("Candidate is passed Tech test." + request.getSelection()); 
    }else{ 
      this.nextObjInSequence.processSelection(request); 
    } 
  } 
}


//Handler class2:  GK Paper
class GKPaper extends HandlerClass 
{ 
  constructor(){
    super();
    this.nextObjInSequence = new HandlerClass();
  } 
  
   setNextObject(nextObjInSequence){ 
    this.nextObjInSequence = nextObjInSequence; 
  } 
  
  processSelection(request) 
  { 
    if ((request.getSelection() >= 40 && request.getSelection()<60)) { 
      console.log("Candidate passed both IP Paper and GK test." + request.getSelection()); 
    }else{ 
      this.nextObjInSequence.processSelection(request); 
    } 
  } 
}

//Handler class3 : Practicle
class Practicle extends HandlerClass 
{ 
  constructor(){
    super();
    this.nextObjInSequence = new HandlerClass();
  } 
  
   setNextObject(nextObjInSequence){ 
    this.nextObjInSequence = nextObjInSequence; 
  } 
  
  processSelection(request) 
  { 
    if ((request.getSelection()>=60)) { 
      console.log("Candidate passed Practicle, IP Paper and GK test." + request.getSelection()); 
    }else{ 
      this.nextObjInSequence.processSelection(request); 
    } 
  } 
}

//create handler objects
var paper1 = new IQPaper(); 
var paper2 = new GKPaper(); 
var paper3 = new Practicle();

paper1.setNextObject(paper2); 
paper2.setNextObject(paper3); 
  
//inputs
paper1.processSelection(new Selection(95)); 
paper1.processSelection(new Selection(42))
paper1.processSelection(new Selection(32)); 
paper1.processSelection(new Selection(9)); 
