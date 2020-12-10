const Discord = require('discord.js');
const client = new Discord.Client();


const prefix = '!';

client.once('ready', () => {
        console.log('I am Online!');
    });

client.on('message', (message) => {
        if (!message.content.startsWith(prefix) || message.author.bot)
            return;

        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();



        if(command === 'packleaders'){
            message.channel.send('https://www.youtube.com/channel/UCG8H4J2VMtt3nd_xjV_SWIQ?view_as=subscriber')
        }
    
    
    
        if(command === 'tfue'){
            message.channel.send('https://www.youtube.com/user/TTfue')
        }
    
    
        if(command === 'tg'){
            message.channel.send('https://www.youtube.com/channel/UC2wKfjlioOCLP4xQMOWNcgg')
        }
    
        if(command === 'eat'){
            message.channel.send('pussy like its oreos  https://www.youtube.com/watch?v=Me6517oH1Rs&has_verified=1')
        }
    
    
    
        if(command === 'dtayknown'){
            message.channel.send('https://www.youtube.com/channel/UCQbkwWO1G1zGkPdHuMiv4Xw')
        }
    
    
        if(command === 'avxry'){
            message.channel.send('https://www.youtube.com/user/Avxry')
        }
    
    
    
        if(command === 'milk'){
            message.channel.send('https://images-ext-2.discordapp.net/external/Nn8xd3Cp3hPlSXk2JeWHiGKVOuPgFCHFfE0Q11mpncs/https/pbs.twimg.com/media/D-ZhEZdXoAYCtHL.jpg%3Alarge?width=400&height=224')
        }
    
    
        if(command === 'alsoavxry'){
            message.channel.send('https://www.youtube.com/channel/UCTUayL42-ewOqoy-7MpcN4A')
        }
    
        if(command === 'unpseakableplays'){
            message.channel.send('https://www.youtube.com/channel/UC1n_yB_W-FZCbwajZPcs8Jw')
        }
    
        if(command === 'yt'){
            message.channel.send('https://www.youtube.com/')
        }
    
        if(command === 'wassabi'){
            message.channel.send('https://www.youtube.com/channel/UCNdqe5zJ6k-i7XKoYWA4Z2g')
        }
    
    
        if(command === 'fl'){
            message.channel.send('https://www.youtube.com/user/Fe4RLesssHD')
        }
    
    
        if(command === 'meola'){
            message.channel.send('https://www.youtube.com/channel/UCwLysHu1fMBJ5wML9mJE_ew')
        }
    

        if(command === 'yum'){
            message.channel.send('https://www.youtube.com/channel/UCrMUPP-xQ7BuEhADfo2GVDQ')
        }


        if(command === 'creamy'){
            message.channel.send('https://www.youtube.com/channel/UC-sjC5fKKsrpcZRJwlZJzZQ')
        }
        
        
        if(command === 'sniperwolf'){
            message.channel.send('https://www.youtube.com/channel/UCpB959t8iPrxQWj7G6n0ctQ')
        }
    
    
        if(command === 'sssniperwolf'){
            message.channel.send('https://www.youtube.com/channel/UCpB959t8iPrxQWj7G6n0ctQ')
        }
    
    
        if(command === 'tgplays'){
            message.channel.send('https://www.youtube.com/channel/UCqVCSWnuOSPm26orvNDTuWQ')
        }
    
        if(command === 'thegamingbever'){
            message.channel.send('https://www.youtube.com/channel/UCP-iaFrmWcOG0o461wMicdg')
        }
    
        if(command === 'suasage'){
            message.channel.send('https://www.youtube.com/channel/UCgYwaV_vROKI2QBMbNXvjUQ')
        }
    
    
    
    
        if(command === 'preston'){
            message.channel.send('https://www.youtube.com/channel/UC70Dib4MvFfT1tU6MqeyHpQ')
        }
    
    
        if(command === 'popularmmos'){
             message.channel.send('https://www.youtube.com/channel/UCpGdL9Sn3Q5YWUH2DVUW1Ug')
        }
    
    
        if(command === 'mrbeast'){
             message.channel.send('https://www.youtube.com/channel/UCX6OQ3DkcsbYNE6H8uQQuVA')
        }
    
    
        if(command === 'drae'){
             message.channel.send('https://www.youtube.com/channel/UCf2ocK7dG_WFUgtDtrKR4rw')
        }
    
        if(command === 'lia'){
              message.channel.send('https://www.youtube.com/channel/UC2hFZwNM71iOOCY3guLE7KQ')
        }
    
        if(command === 'epicgames'){
             message.channel.send('https://www.youtube.com/channel/UC2hFZwNM71iOOCY3guLE7KQ')
        }
    
        if(command === 'patslife'){
            message.channel.send('https://www.youtube.com/channel/UCcAwXGh9X5a6iaA9DcfPooQ')
        }
    
        if(command === 'markiplier'){
            message.channel.send('https://www.youtube.com/channel/UC7_YxT-KID8kRbqZo7MyscQ')
        }
    
        if(command === 'blitz'){
            message.channel.send('https://www.youtube.com/channel/UCK3eoeo-HGHH11Pevo1MzfQ')
        }
    
    
        if(command === 'mrbeastgaming'){
             message.channel.send('https://www.youtube.com/channel/UCIPPMRA040LQr5QPyJEbmXA')
        }
    
        if(command === 'jacksepticeye'){
            message.channel.send('https://www.youtube.com/channel/UCYzPXprvl5Y-Sf0g4vX-m6g')
        }
    
    
    
        if(command === 'kyleexum'){
            message.channel.send('https://www.youtube.com/channel/UCNdqe5zJ6k-i7XKoYWA4Z2')
        }
    
        if(command === 'pee'){
            message.channel.send('pee')
        }
    
    
    
        if(command === 'alpha'){
            message.channel.send('FORCE!')
        }
    
        if(command === 'cat'){
            message.channel.send('dog')
        }
    
        if(command === 'dog'){
            message.channel.send('SHIT')
        }
        
        if(command === 'fart'){
            message.channel.send('ffrfrffff')
        }
    
        if(command === '6'){
            message.channel.send('pack')
        }
        
        if(command === 'six'){
            message.channel.send('pack')
        }
    
        if(command === 'chocolate '){
            message.channel.send('chip cookie')
        }
    
        if(command === 'give'){
            message.channel.send('me you cookies')
        }
    
        if(command === 'wall'){
            message.channel.send('paper')
        }
    
    
        if(command === 'jesus'){
            message.channel.send('crist')
        }
    
        if(command === 'booty'){
            message.channel.send('hole')
        }
    
        if(command === 'send'){
            message.channel.send('nudes')
        }
    
    
        if(command === 'harder'){
            message.channel.send('daddy')
        }



        if(command === 'sugar'){
            message.channel.send('daddy')
        }
    
        
        if(command === 'ah'){
            message.channel.send('si papi')
        }
    
    
    
    
    if(command === 'uno'){
        message.channel.send('dos')
    }
    
    
    
    if(command === 'dos'){
        message.channel.send('tres')
    }
    
    if(command === 'tres'){
        message.channel.send('qruato')
    }
    
    if(command === 'qruato'){
        message.channel.send('sinco')
    }
    
    if(command === 'sinco'){
        message.channel.send('seisc')
    }
    
    
    if(command === 'seisc'){
        message.channel.send('sete')
    }
    
    if(command === 'sete'){
        message.channel.send('ocho')
    }
    
    
    if(command === 'ocho'){
        message.channel.send('nueve')
    }
    
    
    if(command === 'nueve'){
        message.channel.send('deez')
    }
    if(command === 'baby'){
        message.channel.send('daddy')
    }
    
    if(command === 'color'){
        message.channel.send('blind people are bad    JK')
    }
    
    
    if(command === 'bad'){
        message.channel.send('at fortnite')
    }
    
    
    if(command === 'cracked'){
        message.channel.send('at the game')
    }
    
    
    if(command === 'air'){
        message.channel.send('pods')
    }
    
    if(command === 'i'){
        message.channel.send('phone')
    }
    
    if(command === 'sam'){
        message.channel.send('sung')
    }
    
    
    if(command === 'chicken'){
        message.channel.send('wing')
    }
    
    if(command === 'glizzy'){
        message.channel.send('gobbler')
    }
    
    if(command === 'mr'){
        message.channel.send('dick')
    }
    
    if(command === 'sac'){
        message.channel.send('rafice')
    }

    
    
    
    if(command === 'screw'){
        message.channel.send('you!')
    }
    
    
    if(command === 'hot'){
        message.channel.send('dog')
    }
    
    
    if(command === 'cold'){
        message.channel.send('blooded')
    }
    
    if(command === 'wolf'){
        message.channel.send('PACK!')
    }
    
    if(command === 'candy'){
        message.channel.send('cann')
    }
    
    
    if(command === 'christmas'){
        message.channel.send('tree')
    }
    if(command === 'string'){
        message.channel.send('cheese')
    }
    
    if(command === 'cheese'){
        message.channel.send('stinks')
    }
    
    if(command === 'cheddar'){
        message.channel.send('cheese')
    }
    
    if(command === 'play'){
        message.channel.send('games')
    }
    
    if(command === 'sticky'){
        message.channel.send('KEYS ARE ANNOYING')
    }
    
    
    if(command === 'pop'){
        message.channel.send('sicle')
    }
    
    if(command === 'the'){
        message.channel.send('rod')
    }
    
    if(command === 'my'){
        message.channel.send('little dick')
    }
    
    
    
    if(command === 'your'){
        message.channel.send('mom')
    }
    
    
    if(command === 'brown'){
        message.channel.send('brownie')
    }
    
    if(command === 'cookie'){
        message.channel.send('monster')
    }
    
    if(command === 'desk'){
        message.channel.send('top')
    }
    
    if(command === 'pen'){
        message.channel.send('is')
    }
    
    if(command === 'small'){
        message.channel.send('dick')
    }
    
    if(command === 'ro'){
        message.channel.send('blox')
    }
    
    if(command === 'ms'){
        message.channel.send('fucked ur dad')
    }
    
    if(command === 'coding'){
        message.channel.send('is fun')
    }
    
    if(command === 'curse'){
        message.channel.send('forge')
    }
    
    
    if(command === 'clean'){
        message.channel.send('up')
    }
    
    
    if(command === 'suck'){
        message.channel.send('my little dick')
    }
    
    if(command === 'orn'){
        message.channel.send('ament')
    }
    
    
    if(command === 'dew'){
        message.channel.send('rag')
    }
    
    if(command === 'toys'){
        message.channel.send('r for babys')
    }
    
    
    if(command === 'nintendo'){
        message.channel.send('switch')
    }
    
    if(command === 'fortnite'){
        message.channel.send('is bad')
    }
    
    if(command === 'eating'){
        message.channel.send('P P P PUSSAY')
    }
    
    if(command === 'little'){
        message.channel.send('penis')
    }
    
    
    if(command === 'discord'){
        message.channel.send('server')
    }
    
    if(command === 'money'){
        message.channel.send('you dont have any you broke ass bitch')
    }
    
    
    if(command === 'trump'){
        message.channel.send('IS A PUSSY ASS BITCH WHO SUCKS DICK AND IF YOU SAY OTHERWISE YOU WILL BE BANNED')
    }
    
    if(command === 'books'){
        message.channel.send('should all burn in hell idc what tf you say')
    }
    
    if(command === 'mommy'){
        message.channel.send('fucked daddy')
    }
    
    if(command === 'daddy'){
        message.channel.send('fucks other women')
    }
    
    if(command === 'ur'){
        message.channel.send('dad is pregnat "HES" not who "HE" says he is')
    }
    
    if(command === 'shit'){
        message.channel.send('smells good as hell')
    }
    
    if(command === 'sniff'){
        message.channel.send('some shit')
    }
    
    if(command === 'smell'){
        message.channel.send('ur parents room you will smell another womans perfum')
    }
    
    if(command === 'slurp'){
        message.channel.send('da pussy')
    }
    
    if(command === 'poop'){
        message.channel.send('taste like u')
    }
    
    
    if(command === 'sing'){
        message.channel.send('a song')
    }


    if(command === 'dick'){
        message.channel.send('sucker')
    }


    if(command === 'vagina'){
        message.channel.send('pussy')
    }

    if(command === 'hat'){
        message.channel.send('stack')
    }

    if(command === 'ass'){
        message.channel.send('hat')
    }

    if(command === 'pin'){
        message.channel.send('the tail on the donkey')
    }

    if(command === 'go'){
        message.channel.send('home, oh i forgot you dont have one ')
    }

    
    if(command === ''){
        message.channel.send('')
    }


    if(command === ''){
        message.channel.send('')
    }














});




//use your own token in the quotes
client.login('Bot.token');





