import{c as S,b as o,h as p,e as b,a2 as F,a3 as w,A as R,L as x,I as N,a9 as W,x as P,_ as Q,f as G,o as d,R as v,i as r,w as l,W as C,X as M,p as L,U as _,g as U,Q as z,k as K}from"./index.39edd76b.js";import{Q as y}from"./QSeparator.b4db2264.js";import{u as A,a as O}from"./use-dark.db4baf42.js";var D=S({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:n}){const t=o(()=>parseInt(e.lines,10)),i=o(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(t.value===1?" ellipsis":"")),s=o(()=>e.lines!==void 0&&t.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":t.value}:null);return()=>p("div",{style:s.value,class:i.value},b(n.default))}}),B=S({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:n}){const t=o(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>p("div",{class:t.value},b(n.default))}}),$=S({name:"QItem",props:{...A,...F,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:n,emit:t}){const{proxy:{$q:i}}=P(),s=O(e,i),{hasLink:f,linkAttrs:c,linkClass:h,linkTag:E,navigateOnClick:q}=w(),m=R(null),g=R(null),k=o(()=>e.clickable===!0||f.value===!0||e.tag==="label"),u=o(()=>e.disable!==!0&&k.value===!0),J=o(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(s.value===!0?" q-item--dark":"")+(f.value===!0&&e.active===null?h.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(u.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),T=o(()=>{if(e.insetLevel===void 0)return null;const a=i.lang.rtl===!0?"Right":"Left";return{["padding"+a]:16+e.insetLevel*56+"px"}});function V(a){u.value===!0&&(g.value!==null&&(a.qKeyEvent!==!0&&document.activeElement===m.value?g.value.focus():document.activeElement===g.value&&m.value.focus()),q(a))}function H(a){if(u.value===!0&&x(a,[13,32])===!0){N(a),a.qKeyEvent=!0;const I=new MouseEvent("click",a);I.qKeyEvent=!0,m.value.dispatchEvent(I)}t("keyup",a)}function j(){const a=W(n.default,[]);return u.value===!0&&a.unshift(p("div",{class:"q-focus-helper",tabindex:-1,ref:g})),a}return()=>{const a={ref:m,class:J.value,style:T.value,role:"listitem",onClick:V,onKeyup:H};return u.value===!0?(a.tabindex=e.tabindex||"0",Object.assign(a,c.value)):k.value===!0&&(a["aria-disabled"]="true"),p(E.value,a,j())}}}),Y=S({name:"QList",props:{...A,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:n}){const t=P(),i=O(e,t.proxy.$q),s=o(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(i.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>p(e.tag,{class:s.value},b(n.default))}});const X=G({name:"PublicationsPage",setup(){return{papers:[{year:2023,papers:["Diego Donoso, Jose M. Saavedra Survey on Sketch-to-photo Translation. ACM Computing Surveys. 2023. DOI: https://dl.acm.org/doi/10.1145/3606694","Guillermo Mart\xEDnez, Jose M. Saavedra, Nils Murrugarra-LLerena VETE: improving visual embeddings through text descriptions for eCommerce search engines. Multimedia Tools and Applications. 2023. DOI: https://link.springer.com/article/10.1007/s11042-023-14595-8"]},{year:2022,papers:["Jose M. Saavedra, Javier Morales, Nils Murrugarra-LLerenm SBIR-BYOL: a self-supervised sketch-based image retrieval model. Neural Computing and Applications. 2022. DOI:https://link.springer.com/article/10.1007/s00521-022-07978-9","Pablo Pizarro, Nancy Hitschfeld, Jose M. Saavedra, and Ivan Sipriran. Automatic floor plan analysis and recognition: A Review. Automation in Construction. 2022. DOI: https://doi.org/10.1016/j.autcon.2022.104348","Lukas Pavez, Jose M. Saavedra. NL-FCOS: Improving FCOS through Non-Local Modules for Object Detection. International Conference on Pattern Recognition. 2022. DOI: https://doi.org/10.1109/ICPR56361.2022.9956677","Javier Morales, Jose M. Saavedra, Nils Murrugarra-Llerena. Leveraging Unlabeled Data for Sketch-based Understanding. Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) Workshops. 2022. https://openaccess.thecvf.com/content/CVPR2022W/SketchDL/papers/Morales_Leveraging_Unlabeled_Data_for_Sketch-Based_Understanding_CVPRW_2022_paper.pdf"]},{year:2021,papers:["Andre Gustavo Hochuli, Alceu S. Britto, David A SajiS, Jose M. Saavedra, Robert Sabourin and Luiz Eduardo Soares de Oliveira. A Comprehensive Comparison of End-to-End Approaches for Handwritten Digit String Recognition. Expert Systems with Applications (ESWA), 2021. DOI: https://doi.org/10.1016/j.eswa.2020.114196","Pablo Torres, Jose M. Saavedra. Compact and Effective Representations for Sketch-based Image Retrieval. Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) Workshops. https://openaccess.thecvf.com/content/CVPR2021W/SketchDL/papers/Torres_Compact_and_Effective_Representations_for_Sketch-Based_Image_Retrieval_CVPRW_2021_paper.pdf","Anibal Fuentes, Jose M. Saavedra. Sketch-QNet: A Quadruplet ConvNet for Color Sketch-based Image Retrieval. Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) Workshops. https://openaccess.thecvf.com/content/CVPR2021W/SketchDL/papers/Fuentes_Sketch-QNet_A_Quadruplet_ConvNet_for_Color_Sketch-Based_Image_Retrieval_CVPRW_2021_paper.pdf"]},{year:2020,papers:["Ignacio Ubeda, Jose M. Saavedra, St\xE9phane Nicolas, Caroline Petitjean and Laurent Heutte. Improving Pattern Spotting in Historical Documents Using Feature Pyramid Networks. Pattern Recognition Letters (PRL), 2020. DOI: https://doi.org/10.1016/j.patrec.2020.02.002"]},{year:2019,papers:["Fabian Souto, Jose M. Saavedra. DLDENet: Deep Local Directional Embeddings with Increased Foreground Focal Loss for object detection. 38th International Conference of the Chilean Computer Science Society (SCCC), Chile, 2019. DOI: https://doi.org/10.1109/SCCC49216.2019.8966436","Ignacio Ubeda, Jose M. Saavedra, St\xE9phane Nicolas, Caroline Petitjean and Laurent Heutte. Pattern Spotting in Historical Documents Using Convolutional Models. 5th International Workshop on Historical Document Imaging and Processing HIP\u201919 (ICDAR), Sydney, Australia, 2019. DOI: https://doi.org/10.1145/3352631.3352645"]},{year:2016,papers:["Domingo Mery, Erick Svec, Marco Arias, Vladimir Riffo, Jose M. Saavedra, and Sandipan Banerjee. Modern Computer Vision Techniques for X-Ray Testing in Baggage Inspection. IEEE Transactions on Systems, Man, and Cybernetics Systems, 2016. DOI: https://doi.org/10.1109/TSMC.2016.2628381"]},{year:2015,papers:["Jose M. Saavedra. RST-SHELO: Sketch-based image retrieval using sketch tokens and square root normalization. Multimedia Tools and Applications MTAP, Springer, 2015. DOI: https://doi.org/10.1007/s11042-015-3076-5","Juan Manuel Barrios, Jose M. Saavedra. Score Propagation based on Similarity Shot Graph for Improving Visual Object Retrieval. 3rd International Workshop on Speech, Language and Audio in Multimedia, ACM Multimedia, Brisbane, Australia, 2015. DOI: https://doi.org/10.1145/2802558.2814644"]},{year:2014,papers:["Violeta Chang, Jose M. Saavedra, Victor Casta\xF1eda, Luis Sarabia, Nancy Hitschfeld, Steffen H\xE4rtel. Gold-standard and improved framework for sperm head segmentation. Computer Methods and Programs in Biomedicine CMPB, 2014. DOI: https://doi.org/10.1016/j.cmpb.2014.06.018","Jose M. Saavedra. Handwritten Digit Recognition based on Pooling SVM-Classifiers using Orientation and Concavity based Features. Iberoamerican Conference on Pattern Recognition (CIARP), Puerto Vallarta, Mexico, 2014. DOI https://doi.org/10.1007/978-3-319-12568-8_80","Markus Diem, Stefan Fiel, Florian Kleber, Robert Sablatnig, Jose M. Saavedra, David Contreras, Juan Manuel Barrios, Luiz S. Oliveira. ICFHR 2014 Competition on Handwritten Digit String Recognition in Challenging Datasets (HDSRC 2014). International Conference on Frontiers in Handwriting Recognition ICFHR\u201914, Greece, 2014. DOI: https://doi.org/10.1109/ICFHR.2014.136","Jose M. Saavedra. Sketch Based Image Retrieval Using a Soft Computation of the Histogram of Edge Local Orientations (S-HELO). International Conference on Image Processing ICIP, Paris, 2014. DOI: https://doi.org/10.1109/ICIP.2014.7025606"]},{year:2013,papers:["Bo Li , Yijuan Lu, Afzal Godil, Tobias Schreck, Benjamin Bustos, Alfredo Ferreira, Takahiko Furuya, Manuel J. Fonseca, Henry Johan, Takahiro Matsuda, Ryutarou Ohbuchi, Pedro B. Pascoal, Jose M. Saavedra. A comparison of methods for sketch-based 3D shape retrieval. Computer Vision and Image Understanding (CVIU), September, 2013. DOI: https://doi.org/10.1016/j.cviu.2013.11.008","Jose M. Saavedra, Benjamin Bustos. Sketch-based Image Retrieval Using Keyshapes. Multimedia Tools and Applications, Springer 2013. DOI https://doi.org/10.1007/s11042-013-1689-0","Bo Li, Yijuan Lu, Afzal Godil, Tobias Schreck, Masaki Aono, Henry Johan, Jose M. Saavedra , Shoki Tashiro. SHREC\u201913 Track: Large Scale Sketch-Based 3D Shape Retrieval. Proceedings of Eurographics Workshop on 3D Object Retrieval 2013. Girona-Spain. DOI: https://doi.org/10.2312/3DOR/3DOR13/089-096","Jose M. Saavedra, Benjamin Bustos, Violeta Chang. An Accurate Hand Segmentation Approach using a Structure based Shape Localization Technique. International Conference on Computer Vision Theory and Applications (VISAPP, 2013). Barcelona-Spain. https://www.scopus.com/inward/record.uri?eid=2-s2.0-84878249062&partnerID=40&md5=ad06057a567587a282c88e7bae59b53f"]},{year:2012,papers:["B. Li, A. Godil, T. Schreck, M. Alexa, T. Boubekeur, B. Bustos, J. Chen, M. Eitz, T. Furuya, K. Hildebrand, S. Huang, H. Johan, A. Kuijper, R. Ohbuchi, R. Richter, J. M. Saavedra, M. Sherer, T. Yanagimachi, G. J. Yoon, S. M. Yoon. SHREC\u201912 Track: Sketch-Based 3D Shape Retrieval. Proceedings of Eurographics Workshop on 3D Object Retrieval 2012. Cagliari-Italy. DOI: https://doi.org/10.2312/3DOR/3DOR12/109-118","J. M. Saavedra, B. Bustos, T. Shreck, S. Yoon, M. Sherer. Sketch-based 3D Model Retrieval using Keyshapes for Global and Local Representation. Eurographics Workshop on 3D Object Retrieval 2012. Cagliari-Italy. DOI: https://doi.org/10.2312/3DOR/3DOR12/047-050"]},{year:2011,papers:["Jose M. Saavedra, Benjamin Bustos , Maximilian Scherer, Tobias Schreck. STELA: Sketch-Based 3D Model Retrieval using a Structure-Based Local Approach. ACM International Conference on Mulimedia Retrieval 2011 , Trento-Italy. DOI: https://doi.org/10.1145/1991996.1992022"]},{year:2010,papers:["Jose M. Saavedra, Benjamin Bustos An Improved Histogram of Edge Local Orientations for Sketch-Based Image Retrieval, In Michael Goesele, Stefan Roth, Arjan Kuijper, Bernt Schiele, Konrad Schindler (ed.), 32nd Annual Symposium of the German Association for Pattern Recognition (DAGM), pp. 432-441, Sep 2010. Darmstadt, Germany. DOI: https://doi.org/10.1109/ICIP.2014.7025606"]}]}}}),Z=L("p",{class:"text-h4"},"Publications",-1),ee={class:"text-h5"};function ae(e,n,t,i,s,f){return d(),v(C,null,[r(D,null,{default:l(()=>[Z]),_:1}),r(y,{color:"black",style:{margin:"1%"}}),r(Y,{padding:""},{default:l(()=>[(d(!0),v(C,null,M(e.papers,c=>(d(),v("div",{key:c},[r(D,{header:""},{default:l(()=>[L("p",ee,_(c.year),1)]),_:2},1024),(d(!0),v(C,null,M(c.papers,h=>(d(),U($,{key:h},{default:l(()=>[r(B,{avatar:""},{default:l(()=>[r(z,{color:"primary",name:"adjust",size:"sm"})]),_:1}),r(B,{style:{"font-size":"18px"}},{default:l(()=>[K(_(h),1)]),_:2},1024)]),_:2},1024))),128)),r(y,{color:"black",style:{margin:"1%"}})]))),128))]),_:1})],64)}var re=Q(X,[["render",ae]]);export{re as default};
