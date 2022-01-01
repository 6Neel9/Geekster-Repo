var g_class = {
    'name': "Dec21WebFundamentals",
    'instructor': {
      'name': "Aayush Sinha",
      'subject': "MERN"
    },
    'students': [{
        'name': 'Ujjwal',
        'marks': 80,
      },
      {
        'name': 'Anshul',
        'marks': 89,
      },
      {
        'name': 'Lasya',
        'marks': 77,
      },
      {
        'name': 'Ayush',
        'marks': 70,
      },
      {
       'name': 'Gourav',
       'marks': 90,
      },
      {
       'name': 'Niladri',
       'marks': 85,
      },
      {
       'name': 'Ugrasen',
       'marks': 87,
      }
    ],
  };
  
for(var j = 0; j < g_class.students.length; j++){
    if(g_class.students[j].marks >= 85 ){
        console.log(g_class.students[j].name);
    }
      
    
}