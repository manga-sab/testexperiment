import{O as p,a8 as c,a7 as f}from"./index-9260f6c4.js";import{G as m}from"./GLTFLoader-ea390873.js";const x="https://cdn.jsdelivr.net/npm/@webxr-input-profiles/assets@1.0/dist/profiles/generic-hand/";class u{constructor(e,i,t,n,s=null){this.controller=i,this.handModel=e,this.bones=[],s===null&&(s=new m,s.setPath(t||x)),s.load(`${n}.glb`,h=>{const o=h.scene.children[0];this.handModel.add(o);const r=o.getObjectByProperty("type","SkinnedMesh");r.frustumCulled=!1,r.castShadow=!0,r.receiveShadow=!0,["wrist","thumb-metacarpal","thumb-phalanx-proximal","thumb-phalanx-distal","thumb-tip","index-finger-metacarpal","index-finger-phalanx-proximal","index-finger-phalanx-intermediate","index-finger-phalanx-distal","index-finger-tip","middle-finger-metacarpal","middle-finger-phalanx-proximal","middle-finger-phalanx-intermediate","middle-finger-phalanx-distal","middle-finger-tip","ring-finger-metacarpal","ring-finger-phalanx-proximal","ring-finger-phalanx-intermediate","ring-finger-phalanx-distal","ring-finger-tip","pinky-finger-metacarpal","pinky-finger-phalanx-proximal","pinky-finger-phalanx-intermediate","pinky-finger-phalanx-distal","pinky-finger-tip"].forEach(a=>{const l=o.getObjectByName(a);l!==void 0?l.jointName=a:console.warn(`Couldn't find ${a} in ${n} hand mesh`),this.bones.push(l)})})}updateMesh(){const e=this.controller.joints;for(let i=0;i<this.bones.length;i++){const t=this.bones[i];if(t){const n=e[t.jointName];if(n.visible){const s=n.position;t.position.copy(s),t.quaternion.copy(n.quaternion)}}}}}const g=.01,b="index-finger-tip";class y extends p{constructor(e,i=null){super(),this.controller=e,this.motionController=null,this.envMap=null,this.loader=i,this.mesh=null,e.addEventListener("connected",t=>{const n=t.data;n.hand&&!this.motionController&&(this.xrInputSource=n,this.motionController=new u(this,e,this.path,n.handedness,this.loader))}),e.addEventListener("disconnected",()=>{this.clear(),this.motionController=null})}updateMatrixWorld(e){super.updateMatrixWorld(e),this.motionController&&this.motionController.updateMesh()}getPointerPosition(){const e=this.controller.joints[b];return e?e.position:null}intersectBoxObject(e){const i=this.getPointerPosition();if(i){const t=new c(i,g),n=new f().setFromObject(e);return t.intersectsBox(n)}else return!1}checkButton(e){this.intersectBoxObject(e)?e.onPress():e.onClear(),e.isPressed()&&e.whilePressed()}}export{y as OculusHandModel};
