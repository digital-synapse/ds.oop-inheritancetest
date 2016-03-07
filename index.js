(function() {
    
    var Transmission = ds.class({
       
       private: {           
           gear: 0,
           gears: 6           
       },
       
       setGear: function( intGear ) {
           if (intGear < 0 || intGear > this.gears)
                throw 'Invalid Gear (0-6)';
                
           this.gear = intGear;
       }        
    });
    
    var Engine = ds.class({
        
        private: {
            acceleration: 0,
            topAcceleration: 100
        },
        
        setAcceleration: function( decAccel ) {
            if (decAccel < 0 || decAccel > this.topAcceleration)
                throw 'Invalid Acceleration (0-100)';
                
            this.acceleration = decAccel;
        }
    })
    
    var Car = ds.class({
       inherits: [Transmission, Engine],
       
       private: {
           gears: 5,
           topAcceleration: 50    
       },
       
       public: {
           speed: 0
       },
       
       calculateSpeed: function() {
           this.speed = this.gear * this.acceleration;
       }
    });
    
    var myCar = new Car();
    
    for (var gear =0 ; gear < 6; gear++){
        
        myCar.setGear(gear);
        
        for(var accel=0; accel < 50; accel += 25){
            myCar.setAcceleration(accel);
            myCar.calculateSpeed();
            
            console.log('Gear: '+ gear + '  Acceleration: ' + accel + '  Speed: ' + myCar.speed);
        }
    }
    
})();