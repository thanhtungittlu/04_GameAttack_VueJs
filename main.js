new Vue({
    el: '#app',
    data: {
        playerHeal: 100,
        monsterHeal: 100,
        isPlayGame: false,
        turns: [],
    },
    methods:{
        startNewGame: function(){
            this.isPlayGame = true;
            this.playerHeal = 100,
            this.monsterHeal = 100
        },
        endGame: function(){
            if(this.playerHeal == 0){
                setTimeout(function(){alert('Monster win!!!'), location.reload()},500)
                
            }else if(this.monsterHeal == 0){
                setTimeout(function(){alert('Player win!!!'), location.reload()},500)
                
            }else{
                return;
            }
        },
        attack: function(){
            damage = this.randomRange(4,10)
            this.playerHeal -= damage
            if(this.playerHeal<=0){this.playerHeal=0}

            this.turns.unshift({
                isPlayer: false,
                textLog:'Monster hits Player for ' + damage,
            })

            damage = this.randomRange(4,10)
            this.monsterHeal -= damage
            if(this.monsterHeal<=0){this.monsterHeal=0}

            this.turns.unshift({
                isPlayer: true,
                textLog:'Player hits Monster for ' + damage,
            })
            
            if(this.playerHeal == 0 || this.monsterHeal == 0){
                this.endGame()
            }
        },
        specialAttack: function(){
            damage = this.randomRange(4,10)
            this.playerHeal -= damage
            if(this.playerHeal<=0){this.playerHeal=0}
            this.turns.unshift({
                isPlayer: false,
                textLog:'Monster hits Player for ' + damage,
            })


            damage = this.randomRange(8,18)
            this.monsterHeal -= damage
            this.turns.unshift({
                isPlayer: true,
                textLog:'Player hits Monster for ' + damage,
            })

            if(this.monsterHeal<=0){this.monsterHeal=0}
            if(this.playerHeal == 0 || this.monsterHeal == 0){
                this.endGame()
            }
        },
        heal: function(){
            if(this.monsterHeal <= 60){
                healmonster = this.randomRange(5,10)
                this.monsterHeal += healmonster
                this.turns.unshift({
                    isPlayer: false,
                    textLog:'Monster heal ' + healmonster,
                })
            } else if ( this.monsterHeal >= 70){
                
            } else {
                this.turns.unshift({
                    isPlayer: false,
                    textLog:'Monster heal ' + (70-this.monsterHeal),
                })
                this.monsterHeal = 70
            }

            if(this.playerHeal <= 60){
                healPlayer = this.randomRange(5,10)
                this.playerHeal += healPlayer
                this.turns.unshift({
                    isPlayer: true,
                    textLog:'Player heal ' + healPlayer,
                })
                
            }else if ( this.playerHeal >= 70){
                
            }else {
                this.turns.unshift({
                    isPlayer: true,
                    textLog:'Player heal ' + (70-this.playerHeal),
                })
                this.playerHeal = 70
            }   
        },
        giveUp: function(){
            location.reload()
        },
        randomRange: function(min,max){
            return Math.max(Math.floor(Math.random()*(max+1)),min)
        }
    },
})