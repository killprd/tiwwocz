<?php

use frontend\assets\AppAsset;
$assets = AppAsset::register($this);
$this->title = 'Tiwwo';
?>
<nav class="site-navbar navbar navbar-default navbar-fixed-top navbar-mega" role="navigation">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle hamburger hamburger-close navbar-toggle-left hided"
      data-toggle="menubar">
        <span class="sr-only">Toggle navigation</span>
        <span class="hamburger-bar"></span>
      </button>
      <button type="button" class="navbar-toggle collapsed" data-target="#site-navbar-collapse"
      data-toggle="collapse">
        <i class="icon wb-more-horizontal" aria-hidden="true"></i>
      </button>
      <div class="navbar-brand navbar-brand-center site-gridmenu-toggle" data-toggle="gridmenu">
       
      </div>
      <button type="button" class="navbar-toggle collapsed" data-target="#site-navbar-search"
      data-toggle="collapse">
        <span class="sr-only">Toggle Search</span>
        <i class="icon wb-search" aria-hidden="true"></i>
      </button>
    </div>
    <div class="navbar-container container-fluid">
      <!-- Navbar Collapse -->
      <div class="collapse navbar-collapse navbar-collapse-toolbar" id="site-navbar-collapse">
        <!-- Navbar Toolbar -->
        <ol class="breadcrumb breadcrumb-arrow">
            <li><a href="javascript:void(0)">Home</a></li>
            <li><a href="javascript:void(0)">Library</a></li>
            <li class="active">Data</li>
        </ol>
        <!-- End Navbar Toolbar -->
        <!-- Navbar Toolbar Right -->
        <ul class="nav navbar-toolbar navbar-right navbar-toolbar-right">
          <li class="dropdown">
            <a class="dropdown-toggle" data-toggle="dropdown" href="javascript:void(0)" data-animation="scale-up"
            aria-expanded="false" role="button">
              <span class="flag-icon flag-icon-us"></span>
            </a>
            <ul class="dropdown-menu" role="menu">
              <li role="presentation">
                <a href="javascript:void(0)" role="menuitem">
                  <span class="flag-icon flag-icon-gb"></span> English</a>
              </li>
              <li role="presentation">
                <a href="javascript:void(0)" role="menuitem">
                  <span class="flag-icon flag-icon-fr"></span> French</a>
              </li>
              <li role="presentation">
                <a href="javascript:void(0)" role="menuitem">
                  <span class="flag-icon flag-icon-cn"></span> Chinese</a>
              </li>
              <li role="presentation">
                <a href="javascript:void(0)" role="menuitem">
                  <span class="flag-icon flag-icon-de"></span> German</a>
              </li>
              <li role="presentation">
                <a href="javascript:void(0)" role="menuitem">
                  <span class="flag-icon flag-icon-nl"></span> Dutch</a>
              </li>
            </ul>
          </li>
          <li class="dropdown">
            <a class="navbar-avatar dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false"
            data-animation="scale-up" role="button">
              <span class="avatar avatar-online">
                <img src="<?=$assets->baseUrl?>/global/portraits/5.jpg" alt="...">
                <i></i>
              </span>
            </a>
            <ul class="dropdown-menu" role="menu">
              <li role="presentation">
                <a href="javascript:void(0)" role="menuitem"><i class="icon wb-user" aria-hidden="true"></i> Profile</a>
              </li>
              <li role="presentation">
                <a href="javascript:void(0)" role="menuitem"><i class="icon wb-payment" aria-hidden="true"></i> Billing</a>
              </li>
              <li role="presentation">
                <a href="javascript:void(0)" role="menuitem"><i class="icon wb-settings" aria-hidden="true"></i> Settings</a>
              </li>
              <li class="divider" role="presentation"></li>
              <li role="presentation">
                <a href="javascript:void(0)" role="menuitem"><i class="icon wb-power" aria-hidden="true"></i> Logout</a>
              </li>
            </ul>
          </li>
          
          
        </ul>
        <!-- End Navbar Toolbar Right -->
      </div>
      <!-- End Navbar Collapse -->
      <!-- Site Navbar Seach -->
      <div class="collapse navbar-search-overlap" id="site-navbar-search">
        <form role="search">
          <div class="form-group">
            <div class="input-search">
              <i class="input-search-icon wb-search" aria-hidden="true"></i>
              <input type="text" class="form-control" name="site-search" placeholder="Search...">
              <button type="button" class="input-search-close icon wb-close" data-target="#site-navbar-search"
              data-toggle="collapse" aria-label="Close"></button>
            </div>
          </div>
        </form>
      </div>
      <!-- End Site Navbar Seach -->
    </div>
  </nav>
  <div class="site-menubar">
    <div class="site-menubar-body">
        <div>
            <div>
                <div class="block_profile">
                    <img src="<?=$assets->baseUrl?>/assets/images/profile.png" class="img-responsive"/>
                    
                </div>
                <div class="block_profile--title">
                        Vlastimil Hak - průvodce liberecem
                </div>
                

                <ul class="site-menu">            
            
              
                    <li class="site-menu-item">
                      <a class="animsition-link" href="../layouts/menu-collapsed.html">
                        <span class="site-menu-title">Menu Collapsed</span>
                      </a>
                    </li>
                    <li class="site-menu-item">
                      <a class="animsition-link" href="../layouts/menu-collapsed-alt.html">
                        <span class="site-menu-title">Menu Collapsed Alt</span>
                      </a>
                    </li>
                    <li class="site-menu-item active">
                      <a class="animsition-link" href="../layouts/menu-expended.html">
                        <span class="site-menu-title">Menu Expended</span>
                      </a>
                    </li>
                    <li class="site-menu-item">
                      <a class="animsition-link" href="../layouts/grids.html">
                        <span class="site-menu-title">Grid Scaffolding</span>
                      </a>
                    </li>
                    <li class="site-menu-item">
                      <a class="animsition-link" href="../layouts/layout-grid.html">
                        <span class="site-menu-title">Layout Grid</span>
                      </a>
                    </li>
                    <li class="site-menu-item">
                      <a class="animsition-link" href="../layouts/headers.html">
                        <span class="site-menu-title">Different Headers</span>
                      </a>
                    </li>
                    <li class="site-menu-item">
                      <a class="animsition-link" href="../layouts/panel-transition.html">
                        <span class="site-menu-title">Panel Transition</span>
                      </a>
                    </li>
                            
              
           
                </ul>
          
            </div>
        </div>
    </div>
    <div class="site-menubar-footer">
      <a href="javascript: void(0);" class="fold-show" data-placement="top" data-toggle="tooltip"
      data-original-title="Settings">
        <span class="icon wb-settings" aria-hidden="true"></span>
      </a>
      <a href="javascript: void(0);" data-placement="top" data-toggle="tooltip" data-original-title="Lock">
        <span class="icon wb-eye-close" aria-hidden="true"></span>
      </a>
      <a href="javascript: void(0);" data-placement="top" data-toggle="tooltip" data-original-title="Logout">
        <span class="icon wb-power" aria-hidden="true"></span>
      </a>
    </div>
  </div>
  <div class="site-gridmenu">
    <div>
      <div>
        <ul>
          <li>
            <a href="../apps/mailbox/mailbox.html">
              <i class="icon wb-envelope"></i>
              <span>Mailbox</span>
            </a>
          </li>
          <li>
            <a href="../apps/calendar/calendar.html">
              <i class="icon wb-calendar"></i>
              <span>Calendar</span>
            </a>
          </li>
          <li>
            <a href="../apps/contacts/contacts.html">
              <i class="icon wb-user"></i>
              <span>Contacts</span>
            </a>
          </li>
          <li>
            <a href="../apps/media/overview.html">
              <i class="icon wb-camera"></i>
              <span>Media</span>
            </a>
          </li>
          <li>
            <a href="../apps/documents/categories.html">
              <i class="icon wb-order"></i>
              <span>Documents</span>
            </a>
          </li>
          <li>
            <a href="../apps/projects/projects.html">
              <i class="icon wb-image"></i>
              <span>Project</span>
            </a>
          </li>
          <li>
            <a href="../apps/forum/forum.html">
              <i class="icon wb-chat-group"></i>
              <span>Forum</span>
            </a>
          </li>
          <li>
            <a href="../index.html">
              <i class="icon wb-dashboard"></i>
              <span>Dashboard</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- Page -->
  <div class="page animsition">
    <div class="page-header">
      <h1 class="page-title">Menu Expended</h1>
    </div>
    <div class="page-content">
      <div class="panel">
        <div class="panel-heading">
          <h3 class="panel-title">DEMO CONTENT</h3>
        </div>
        <div class="panel-body">
          <p>Praeteritas patiatur habuit aptior torquem, claudicare discenda, habent
            accusamus commune. Eos dicat constituant, cedentem prima telos dissensio
            mererer adipiscuntur retinere explicari dicendum terentianus, arbitrium
            definitiones deduceret subtilius certa, postulant, tolerabiles quondam
            forensibus secutus dubitat insipientiam fuit mihi urbanitas, dicam
            utrumque sicut utilitas scribi nomine. Epicurum sol consentaneum stulti
            error illas atque gratia priventur, gravioribus sinit malit, extremum
            privavisse ornatus latina, d ullum abhorreant minuti latinas carere
            intus, nominata exercitationem suas molita verbis cogitemus reque ero,
            iustioribus maximis. Suavitate, malint eam quaerimus desideraturam
            quid coercendi laborum quando concludaturque, contemnentes infanti
            accedit, solent spatio gravissimas detracto respondendum, inciderit
            perdiderunt scribentur perfunctio. Vulgo iniurias, leviora officia
            emolumenti invenire cognosci conciliant chrysippe. Verentur quem efficeretur
            ostendit, institutionem copulatas perpetuis acute similia utraque grate
            libido, dissentias probo atomi utilitatibus soleat facere ignavi tuentur
            timiditatem moribus. Impediri error invenire facillime nihilo. Efficiatur
            apud procedat tale meminerunt liberemus nondum transferrem singulis,
            veri, loqueretur periculum tradidisse conclusionemque earumque magnum
            deterritum, triario pariant praeda debeo verborum, stoicis eam miserius
            oblivione urbane ancillae cruciantur egregios praeceptrice voluptaria,
            initia atomis avocent iniuria patientia, vivere corporum minuti doctiores,
            quaeso intellegentium videre tractat.</p>
          <p>Mens iniuria, ponderum convenire pariter torquatis recusandae id efficitur
            incurreret, emancipaverat asperner fugiendam inanitate etiam potitur,
            discordant incidunt manilium consuetudine o tota exercitus ponendam
            ecce cursu. Quaeque rebus liberae rationibus studium fames per, exhorrescere.
            Umbram perdiderunt. Geometria detractio impensa. Plerisque disciplinae
            locos is aegritudinem summum amicitias, tuo chrysippo platonem dicitur
            progrediens. Clamat, architecto sollicitant tale certe titillaret ingeniis
            doctrinis. Artem bonas leguntur memoriter oriantur. Displicet defuit
            fugiendum iucundius, declinabunt privamur solum. Audire obruamus augendas
            copulatas versatur nivem albuci quarum. Interiret nollem ornatum video.
            Corrupte quanti miser albam petentium parabilis utrumque, amaret putem
            putanda aegritudo sententiae loquuntur interiret, probamus statuerunt
            videretur detractis probarentur, exquirere putavisset, magis generis
            pertinax eveniunt. Sequi impetus reperietur sollicitare tranquillat,
            cognitio, liberamur praesenti utinam finitas omnisque reperiri facillime
            cura meliore, contumeliae graviter redeamus deserunt. Verissimum multa
            se reliquerunt torqueantur, notae aegritudines videre voluptaria atomorum
            iudicabit ea, arbitrer clamat agam homo ait, facilis natus patriam
            forte consequentium firmitatem voluptates perpessio, gravissimo. Paratus
            derepta nunc essent potuimus, tibique assidua peccandi apeirian fabellas,
            brevis inciderint, pervenias fidelissimae notionem deinde negent proprius
            dicemus torquatus, bonarum. Vim, accusator, desideraret suam interdictum
            severa.</p>
          <p>Egregios corrumpit durissimis chrysippe quidque, emolumenti dixisset
            temporis ulla docui, gravitate provincia pueros necessariam, plurimum
            quando eitam aeternum administrari. Iisque animadvertat omnia. Emolumenti
            incorruptis volunt consecutus inanitate significet idcirco. Coniunctione
            malle placet angatur possint, dixit utraque nescius, voce pueri morati
            sanguinem fastidii, praetore habeatur sive. Primisque velit emancipaverat
            quaerendum. Efficerent, accusantibus servare bonum adolescens conferebamus
            totum, graviter pendet diuturnum inpotenti perpetua placet. Fit reprehendunt
            dixisset sive apte sentit fruuntur voce, adolescens, nemini statuerunt
            sola videatur multos timeam operosam nosmet earum. Patria expectamus
            quantaque pendet probamus, oculis praetore praesentium obruamus firmissima,
            partem. Quasi artis cumanum diceretur sero eius eidola, errem assidua
            numeranda sublata captiosa adversarium segnitiae publicam licet. Via
            incurrunt locos, divinum utroque haeret bestiae amplificarique disciplinis
            maestitiam, detraxisse, disputationi tueri manum conspectum optime
            miraretur puerilis easque, iucunditatem laudantium, antiqua tranquillat
            adipiscendarum athenis defendit collegisti utuntur bello iracundiae
            imitarentur, laborum beatus sitne salutatus genuit, malarum excruciant
            defuit unde perpaulum partem praesenti consul disputari sumitur. Queo
            aristippus antiquis praetermittatur offendimur, explentur amputata
            videre quaedam, effugiendorum tempore industriae, quantaque, qui magnam
            liberos earumque explicari corpora pater senectutem. Existimavit excruciant
            mox tantopere fuissent tamque.</p>
          <p>Diligant. Reliquisti video torquentur excelsus ille, aliquid rutilius,
            dicunt sic, maximasque deteriora hinc simplicem, consequentium, magnis,
            statuat dare suspicor explicatis fortasse reprehendunt quaerimus ullius,
            oportere sabinum pertinerent una laetetur. Virtutum adquiescere expectamus
            putem adquiescere persius incidant. Intellegi ortum. Repudiandae audita
            ob. Pugnantibus. Corrupte. Torqueantur placeat faciam maluisset tritani
            susciperet sciscat, ponunt pertinaces legendus, impetus atomi hausta,
            que, aequo fatemur. Cursu platonem saluti sanciret nondum legimus afficitur
            adipiscuntur. Chorusque stoicis otiosum partus praesens oblivione efficeretur.
            Nobis confidet utroque. Possimus artes arbitrer volumus haec importari
            siculis, statua sine, suscipere feci tertio nimium consule idem consule,
            domo negat quin vacillare interesse transferre omnisque ignavia interesset,
            duce cupiditate expetendas manus reddidisti dividendo primo firmam
            fugiendis effecerit. Optinere ullum nutu sinit, voluptati scientiam
            elaborare motum stultorum senectutem sero totus prompta. Ponendam nos
            parvam dixeris corporis fortibus suspicio usus posset, consoletur iudiciorumque
            diogenem cupiditatum utinam familiaritatem athenis comit, philosopho
            ab expectata intelleges primus modice domo, voce sicine agatur everti
            perspecta eitam erudito disciplina acute, contineri philosophia nescio
            nollem, assumenda quoquo sed id, habeatur, amori auctori ineruditus
            intellegunt numen bonae hic expressas corpore, nutu nesciunt augeri
            quosvis.</p>
          <p>Permulta negant iudicem physico recteque nascuntur probabis modis atqui
            imperii, sin eas iustitia isti diuturnitatem sentio venisset, philosophari
            romanum sedatio filio, statuam perspici morborum diligant integre comprobavit
            insequitur. Dediti morbi altera philosophi naturam consistat huc. Magnam.
            Aliquo tollitur habent macedonum, incidunt inveniri ludicra, sedulitatem
            conclusum voluerint tam debilitati, voluptaria quando geometriaque
            interrogari, indignae l debet proposita. Aristotele pleniorem noctesque
            minima seiunctum, verear priventur iucunda sedulitatem fortitudo molestia
            distinctio libenter ultima, iustioribus terentianus re multavit mollitia
            operosam ait. Ipsis, tranquillitatem perfunctio tibi alia torquatis
            l mortem mnesarchum graece umbram, solitudo utamur dialectica logikh
            delectari cupiditate consequentium celeritas putarent intellegimus,
            virtutibus afficitur. Consedit morbis dolore interesset eadem, horum
            tantalo flagitem eligendi albuci, doctissimos intemperantiam ordiamur
            poetis privatione hominum te macedonum, satis propemodum audita magnitudinem
            partes gravissimis, magnam parabilis ponit, animumque imbutus ne dicenda,
            firmitatem quae statuat dolores concupiscunt ibidem didicisse fugiendam,
            totus humili sale chorusque quid, gravissimo officia praetulerit, aperiam
            summo operosam adipisci porro omnino probarent, meo necessitatibus
            metuque inane, latinam ab amicitiae ei existunt virtus ipsi sensuum.
            Isdem temperantia constituit fuga naturalem desistunt referenda tenuit
            unam, animum expectata singulis doctiores.
          </p>
          <p>Allevatio copiosae huc fugiendum ignota assentior choro, torqueantur
            seditiones dissensio terentii quas vitae, interiret tali explicavi
            earumque verentur expectata, ferrentur desiderent venisset, habeatur.
            Inquit, aetatis perspecta quisque pacuvii assentiar iucunda libro omnis.
            Quidque numen torquatos percurri duce vetuit scientia. Declinare finiri
            hinc ponendam suscipiantur gratissimo eloquentiam nutu, urbane peccant,
            filio, divinum libidinibus perturbari hortatore explicatam meque comparandae
            maius horribiles dulce, mutae locos primos animus tractatos eligendi
            discordans status constituam materia. Iustius videmus odit praebeat
            inprobitatem numeris reiciat, miserum concedo facere miserum theseo
            easque epularum, erant, putat hostem denique, emancipaverat hosti amicorum
            adolescens malint dicta bona fautrices municipem, inpendente detractio
            declinabunt cives fecisse fuissent copulatas excruciant modi firmissimum,
            dictum sollicitare retinere elaborare opes aeque imperitorum necessariae
            facerem, sabinum possimus utrum sanciret exquirere sentiri efficeretur
            sensum, pertinerent consumere ignorant, incurrunt concordia quaeritur,
            municipem magnitudinem contineret cupiditatibus falso convicia, simulent
            labefactant fruuntur disciplinam exeamus. Meminerimus atomus aequo
            conficiuntur robustus etsi phaedrum causa recusandae. Ero stabilitas
            arguerent utilitate interpretaris. Notae effecerit praetulerit inciderit.
            Credere nemo cedentem recusandae hinc notissima declinatio, perpetuis
            pertinacia legendis fidelissimae invenerit, uterque zenonem fautrices
            vellem personae, evertitur malorum viam summam.</p>
        </div>
      </div>
    </div>
  </div>
