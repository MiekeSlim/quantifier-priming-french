// Alle lijsten: Worden alle trialcolumns opgeslagen?
// Check of alle prime-target sets compleet zijn (door alle lijsten zonder the fillers te checken)
// Voeg de laatste twee vragen toe. 

PennController.ResetPrefix(null);
// PennController.DebugOff()
// PennController.SetCounter("Counter")
// PennController.Sequence("consent", "ProlificID", "instructions", "trials","Debriefing", "Send", "closing")
// PennController.Sequence("consent", "ProlificID", "instructions", "Debriefing", "Send", "closing")
// AddHost("https://slimexp.ugent.be//ModalPriming_Exp1/");
// var showProgressBar = false;

newTrial("instructions",
    newHtml("instructions", "instructions.html")
        .center()
        .cssContainer({"width":"720px"})
        .print()
    ,
    newButton("Continuer")
       .settings.center()
       .print()
       .wait()  
    );

