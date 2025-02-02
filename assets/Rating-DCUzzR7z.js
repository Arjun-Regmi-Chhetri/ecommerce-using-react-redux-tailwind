import{r as a,R as ge,h as se,j as s,q as be,t as Re,v as q,w as ie,x as ae,y as xe,z as Fe,A as W,B as Ve,C as Se}from"./index-DWr4clIU.js";function Ce(e,t){typeof e=="function"?e(t):e&&(e.current=t)}let ee=0;function Ae(e){const[t,n]=a.useState(e),r=e||t;return a.useEffect(()=>{t==null&&(ee+=1,n(`mui-${ee}`))},[t]),r}const we={...ge},te=we.useId;function le(e){if(te!==void 0){const t=te();return e??t}return Ae(e)}function Me({controlled:e,default:t,name:n,state:r="value"}){const{current:d}=a.useRef(e!==void 0),[g,v]=a.useState(t),p=d?e:g,R=a.useCallback(x=>{d||v(x)},[]);return[p,R]}function Ee(...e){return a.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(n=>{Ce(n,t)})},e)}function ne(e){try{return e.matches(":focus-visible")}catch{}return!1}const He={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"},Ie=a.createContext(),je=()=>a.useContext(Ie)??!1,ze=se(s.jsx("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star"),Le=se(s.jsx("path",{d:"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarBorder");function $e(e){return Re("MuiRating",e)}const P=be("MuiRating",["root","sizeSmall","sizeMedium","sizeLarge","readOnly","disabled","focusVisible","visuallyHidden","pristine","label","labelEmptyValueActive","icon","iconEmpty","iconFilled","iconHover","iconFocus","iconActive","decimal"]);function Ne(e){const t=e.toString().split(".")[1];return t?t.length:0}function J(e,t){if(e==null)return e;const n=Math.round(e/t)*t;return Number(n.toFixed(Ne(t)))}const Pe=e=>{const{classes:t,size:n,readOnly:r,disabled:d,emptyValueFocused:g,focusVisible:v}=e,p={root:["root",`size${ie(n)}`,d&&"disabled",v&&"focusVisible",r&&"readOnly"],label:["label","pristine"],labelEmptyValue:[g&&"labelEmptyValueActive"],icon:["icon"],iconEmpty:["iconEmpty"],iconFilled:["iconFilled"],iconHover:["iconHover"],iconFocus:["iconFocus"],iconActive:["iconActive"],decimal:["decimal"],visuallyHidden:["visuallyHidden"]};return Ve(p,$e,t)},Oe=q("span",{name:"MuiRating",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[{[`& .${P.visuallyHidden}`]:t.visuallyHidden},t.root,t[`size${ie(n.size)}`],n.readOnly&&t.readOnly]}})(ae(({theme:e})=>({display:"inline-flex",position:"relative",fontSize:e.typography.pxToRem(24),color:"#faaf00",cursor:"pointer",textAlign:"left",width:"min-content",WebkitTapHighlightColor:"transparent",[`&.${P.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity,pointerEvents:"none"},[`&.${P.focusVisible} .${P.iconActive}`]:{outline:"1px solid #999"},[`& .${P.visuallyHidden}`]:He,variants:[{props:{size:"small"},style:{fontSize:e.typography.pxToRem(18)}},{props:{size:"large"},style:{fontSize:e.typography.pxToRem(30)}},{props:({ownerState:t})=>t.readOnly,style:{pointerEvents:"none"}}]}))),ce=q("label",{name:"MuiRating",slot:"Label",overridesResolver:({ownerState:e},t)=>[t.label,e.emptyValueFocused&&t.labelEmptyValueActive]})({cursor:"inherit",variants:[{props:({ownerState:e})=>e.emptyValueFocused,style:{top:0,bottom:0,position:"absolute",outline:"1px solid #999",width:"100%"}}]}),Te=q("span",{name:"MuiRating",slot:"Icon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.icon,n.iconEmpty&&t.iconEmpty,n.iconFilled&&t.iconFilled,n.iconHover&&t.iconHover,n.iconFocus&&t.iconFocus,n.iconActive&&t.iconActive]}})(ae(({theme:e})=>({display:"flex",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),pointerEvents:"none",variants:[{props:({ownerState:t})=>t.iconActive,style:{transform:"scale(1.2)"}},{props:({ownerState:t})=>t.iconEmpty,style:{color:(e.vars||e).palette.action.disabled}}]}))),ke=q("span",{name:"MuiRating",slot:"Decimal",shouldForwardProp:e=>xe(e)&&e!=="iconActive",overridesResolver:(e,t)=>{const{iconActive:n}=e;return[t.decimal,n&&t.iconActive]}})({position:"relative",variants:[{props:({iconActive:e})=>e,style:{transform:"scale(1.2)"}}]});function Be(e){const{value:t,...n}=e;return s.jsx("span",{...n})}function oe(e){const{classes:t,disabled:n,emptyIcon:r,focus:d,getLabelText:g,highlightSelectedOnly:v,hover:p,icon:R,IconContainerComponent:x,isActive:F,itemValue:u,labelProps:H,name:I,onBlur:V,onChange:G,onClick:S,onFocus:C,readOnly:O,ownerState:j,ratingValue:l,ratingValueRounded:h}=e,A=v?u===l:u<=l,T=u<=p,k=u<=d,z=u===h,B=`${I}-${le()}`,L=s.jsx(Te,{as:x,value:u,className:W(t.icon,A?t.iconFilled:t.iconEmpty,T&&t.iconHover,k&&t.iconFocus,F&&t.iconActive),ownerState:{...j,iconEmpty:!A,iconFilled:A,iconHover:T,iconFocus:k,iconActive:F},children:r&&!A?r:R});return O?s.jsx("span",{...H,children:L}):s.jsxs(a.Fragment,{children:[s.jsxs(ce,{ownerState:{...j,emptyValueFocused:void 0},htmlFor:B,...H,children:[L,s.jsx("span",{className:t.visuallyHidden,children:g(u)})]}),s.jsx("input",{className:t.visuallyHidden,onFocus:C,onBlur:V,onChange:G,onClick:S,disabled:n,value:u,id:B,type:"radio",name:I,checked:z})]})}const Ue=s.jsx(ze,{fontSize:"inherit"}),De=s.jsx(Le,{fontSize:"inherit"});function Xe(e){return`${e||"0"} Star${e!==1?"s":""}`}const qe=a.forwardRef(function(t,n){const r=Fe({name:"MuiRating",props:t}),{component:d="span",className:g,defaultValue:v=null,disabled:p=!1,emptyIcon:R=De,emptyLabelText:x="Empty",getLabelText:F=Xe,highlightSelectedOnly:u=!1,icon:H=Ue,IconContainerComponent:I=Be,max:V=5,name:G,onChange:S,onChangeActive:C,onMouseLeave:O,onMouseMove:j,precision:l=1,readOnly:h=!1,size:A="medium",value:T,...k}=r,z=le(G),[B,L]=Me({controlled:T,default:v,name:"Rating"}),U=J(B,l),re=je(),[{hover:f,focus:D},$]=a.useState({hover:-1,focus:-1});let w=U;f!==-1&&(w=f),D!==-1&&(w=D);const[ue,Y]=a.useState(!1),K=a.useRef(),de=Ee(K,n),pe=o=>{j&&j(o);const i=K.current,{right:c,left:X,width:M}=i.getBoundingClientRect();let E;re?E=(c-o.clientX)/M:E=(o.clientX-X)/M;let m=J(V*E+l/2,l);m=Se(m,l,V),$(b=>b.hover===m&&b.focus===m?b:{hover:m,focus:m}),Y(!1),C&&f!==m&&C(o,m)},fe=o=>{O&&O(o);const i=-1;$({hover:i,focus:i}),C&&f!==i&&C(o,i)},Q=o=>{let i=o.target.value===""?null:parseFloat(o.target.value);f!==-1&&(i=f),L(i),S&&S(o,i)},me=o=>{o.clientX===0&&o.clientY===0||($({hover:-1,focus:-1}),L(null),S&&parseFloat(o.target.value)===U&&S(o,null))},ve=o=>{ne(o.target)&&Y(!0);const i=parseFloat(o.target.value);$(c=>({hover:c.hover,focus:i}))},he=o=>{if(f!==-1)return;ne(o.target)||Y(!1);const i=-1;$(c=>({hover:c.hover,focus:i}))},[ye,Z]=a.useState(!1),N={...r,component:d,defaultValue:v,disabled:p,emptyIcon:R,emptyLabelText:x,emptyValueFocused:ye,focusVisible:ue,getLabelText:F,icon:H,IconContainerComponent:I,max:V,precision:l,readOnly:h,size:A},y=Pe(N);return s.jsxs(Oe,{as:d,ref:de,onMouseMove:pe,onMouseLeave:fe,className:W(y.root,g,h&&"MuiRating-readOnly"),ownerState:N,role:h?"img":null,"aria-label":h?F(w):null,...k,children:[Array.from(new Array(V)).map((o,i)=>{const c=i+1,X={classes:y,disabled:p,emptyIcon:R,focus:D,getLabelText:F,highlightSelectedOnly:u,hover:f,icon:H,IconContainerComponent:I,name:z,onBlur:he,onChange:Q,onClick:me,onFocus:ve,ratingValue:w,ratingValueRounded:U,readOnly:h,ownerState:N},M=c===Math.ceil(w)&&(f!==-1||D!==-1);if(l<1){const E=Array.from(new Array(1/l));return s.jsx(ke,{className:W(y.decimal,M&&y.iconActive),ownerState:N,iconActive:M,children:E.map((m,b)=>{const _=J(c-1+(b+1)*l,l);return s.jsx(oe,{...X,isActive:!1,itemValue:_,labelProps:{style:E.length-1===b?{}:{width:_===w?`${(b+1)*l*100}%`:"0%",overflow:"hidden",position:"absolute"}}},_)})},c)}return s.jsx(oe,{...X,isActive:M,itemValue:c},c)}),!h&&!p&&s.jsxs(ce,{className:W(y.label,y.labelEmptyValue),ownerState:N,children:[s.jsx("input",{className:y.visuallyHidden,value:"",id:`${z}-empty`,type:"radio",name:z,checked:U==null,onFocus:()=>Z(!0),onBlur:()=>Z(!1),onChange:Q}),s.jsx("span",{className:y.visuallyHidden,children:x})]})]})});export{qe as R};
