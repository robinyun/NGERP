var head = $('.header');
var date = $('#imgDisplay');
var desc = $('.desc');

if($('input:radio:checked').length > 0) {
  head.html("Project Prep");
  date.html("10/26/10 - 12/1/10");
  desc.html("Team reviews legacy systems and how they meet functional requirements of the business, drafts a schedule, defines resources, and creates a Concept of Operations (ConOps) document for the project.<br><hr>Milestones: ConOps completion, Finalize team development");
} else {
  head.html("");
  date.html("");
  desc.html("");
};

 $('#zero').click(function(){
    head.html("Project Prep");
    date.html("10/26/10 - 12/1/10");
    desc.html("Team reviews legacy systems and how they meet functional requirements of the business, drafts a schedule, defines resources, and creates a Concept of Operations (ConOps) document for the project.<br><hr>Milestones: ConOps completion, Finalize team development");
  });

$('#five').click(function(){
  head.html("Blueprint");
  date.html("11/1/10 - 5/12/11");
  desc.html("Team defines specs for conversions, system interfaces, required enhancement; develops functional process flows, transaction flows, a systems requirements document (SRD), and validates all through a checkpoint review.<br><hr>Milestones: Specs completion, SRD completion")
});

$('#twentyfive').click(function(){
  head.html("Realization");
  date.html("1/10/11 - 10/13/11");
  desc.html("Using system specs, process flows, transactions and systems requirement documentation, the team builds a system to meet these requirements (BOMs, applications, conversions, enhancements, interfaces).<br><hr>Milestones: Completion of applications, conversions, enhancements, and interfaces")
});

$('#fifty').click(function(){
  head.html("Testing");
  date.html("5/1/11 - 4/12/12");
  desc.html("In Mock Conversion and Systems Integration Testing (SIT), the team tests every aspect of the planned system -- its transactions, conversions, enhancements, interfaces and checks them against the business and functional requirements.<br><hr>Milestones: Completion of all conversions testing and systems integration testing")
});

$('#seventyfive').click(function(){
  head.html("Training");
  date.html("5/1/12 - 8/1/12");
  desc.html("Team training leads develop training materials witht he Change Management team and place a schedule to allow employees opportunities to learn any changes in how they perform their jobs and how to use the system. Completion of training is required to become a new system user.<br><hr>Milestones: Training of priority users complete by go-live and completion of all other users")
});

$('#onehundred').click(function(){
  head.html("Stabilization");
  date.html("7/16/12 - 10/1/12");
  desc.html("After the new system is turned on (Go-Live), a team of system experts helps users adapt to new business processes and systems transactions for several months as required.<br><hr>Milestones: Systems function as expected and users can operate the system with minimal assistance")
});
