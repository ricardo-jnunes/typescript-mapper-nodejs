
init();
//mapping();
//complexMapping();
complexMappingAndTransform();

function init() {
    
}

//map with destructuring
function mapping() {

    const data = [{
        open: '122.31000000',
        high: '137.50000000',
        low: '119.50000000',
        close: '135.92000000',
        volume: '1436796.12449000',
        closeTime: 1585007999999,
      },
      {
        open: '132.63000000',
        high: '137.13000000',
        low: '121.10000000',
        close: '122.32000000',
        volume: '1055699.86532000',
        closeTime: 1584921599999,
      }]
      
      const updated = data.map(({open: o, high: h, low: l, close: c, volume: v, closeTime: d}) => ({o, h, l, c, v, d}))
      
      console.log(updated)
}

function complexMapping() {

    const data = [{
        open: '122.31000000',
        volume:[
            { entry: 1, track:1},
            { entry: 2, track:2}
        ],
        closeTime: 1585007999999,
      }];
      
      const updated = data.map(({open: o, volume: v,  closeTime: d}) => ({o, v, d}))
      
      console.log(updated[0].v)
}

function complexMappingAndTransform() {

    const data = [{
        open: '122.31000000',
        volume:[
            { entry: 1, track:1},
            { entry: 2, track:2}
        ],
        closeTime: 1585007999999,
      }];
      
      const updated = data.map(({
          open: o, 
          volume: v,  
          closeTime: d
        }) => ({o, vol:v[0].entry, d}))
      
      console.log(updated)
}