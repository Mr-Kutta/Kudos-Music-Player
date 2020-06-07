let playlist = [ {
    'title': 'Kanave Nee Naan | Kudos Music Player',
    'audio': "assets/Kanave Nee Naan.mp3",
  }, { 
    'title': 'Marappadhilai Nenje Additional Song | Kudos Music Player',
    'audio': "assets/Marappadhilai Nenje Additional Song.mp3",
    }, {
      'title': 'Unakaga | Kudos Music Player',
      'audio': "assets/Unakaga.mp3",
    }, {
      'title': 'Veyyon Silli (From Soorarai Pottru) | Kudos Music Player',
      'audio': "assets/Veyyon Silli (From Soorarai Pottru).mp3",
    }, {
    'title': 'Kadhaippoma | Kudos Music Player',
    'audio': "assets/Kadhaippoma.mp3",
  }, {
    'title': 'Thaarame Thaarame | Kudos Music Player',
    'audio': "assets/Thaarame Thaarame.mp3",
  }, {
    'title': 'Unna Nenachu | Kudos Music Player',
    'audio': "assets/Unna Nenachu.mp3",
  }, {
    'title': 'Anbae Peranbae | Kudos Music Player',
    'audio': "assets/Anbae Peranbae.mp3",
  },  {
    'title': 'Ennai Vittu | Kudos Music Player',
    'audio': "assets/Ennai Vittu.mp3",
  }, {
    'title': 'Kannamma | Kudos Music Player',
    'audio': "assets/kannamma.mp3",
  }, {
    'title': 'Orasaadha-Madras Gig | Kudos Music Player',
    'audio': "assets/Orasaadha-Madras Gig.mp3",
  }, {
   'title': 'Maruvaarthai | Kudos Music Player',
   'audio': "assets/Maruvaarthai.mp3",
  }, {
  'title': 'Othaiyadi Pathayila | Kudos Music Player',
  'audio': "assets/Othaiyadi Pathayila.mp3",
  }, {
  'title': 'Andha Kanna Paathaakaa | Kudos Music Player',
  'audio': "assets/Andha Kanna Paathaakaa.mp3",
  }, {
    'title': 'Kaathalae Kaathalae | Kudos Music Player',
    'audio': "assets/Kaathalae Kaathalae.mp3",
   }, {
   'title': 'Ennadi Maayavi Nee | Kudos Music Player',
   'audio': "assets/Ennadi Maayavi Nee.mp3",
   }, {
   'title': 'Munbe Vaa | Kudos Music Player',
   'audio': "assets/Munbe Vaa.mp3",
   } , {
      'title': 'Neeyum Naanum Anbe | Kudos Music Player',
      'audio': "assets/Neeyum Naanum Anbe - SenSongsMp3.Co (1).mp3",
      }, {
        'title': 'Hi Sonna Podhum | Kudos Music Player',
        'audio': "assets/Hi Sonna Podhum.mp3",
        }, {
          'title': 'Kanne Kanne | Kudos Music Player',
          'audio': "assets/Kanne Kanne.mp3",
          }, {
            'title': 'Gaandakannazhagi | Kudos Music Player',
            'audio': "assets/Gaandakannazhagi.mp3",
            }, {
              'title': 'Usure | Kudos Music Player',
              'audio': "assets/Usure.mp3",
              }, {
                'title': 'Inayae | Kudos Music Player',
                'audio': "assets/Inayae.mp3",
                }, {
                  'title': 'Haiyo Haiyo | Kudos Music Player',
                  'audio': "assets/Haiyo_Haiyo.mp3",
                  }, {
                    'title': 'Gaandu Kannamma | Kudos Music Player',
                    'audio': "assets/Gaandu_Kannamma.mp3",
                    }, {
                      'title': 'Dhom Dhom | Kudos Music Player',
                      'audio': "assets/Dhom_Dhom.mp3",
                    }, { 
                      'title': 'Kaadhal Theevey (From Dharala Prabhu) | Kudos Music Player',
                      'audio': "assets/Kaadhal Theevey (From Dharala Prabhu).mp3",
                      }, {
                        'title': 'Mazhai Kuruvi | Kudos Music Player',
                        'audio': "assets/Mazhai_Kuruvi.mp3",
                      }, {
                        'title': 'Takkunu Takkunu | Kudos Music Player',
                        'audio': "assets/Takkunu Takkunu.mp3",
                      } ,{
                        'title': 'Sandakari Neethan | Kudos Music Player',
                        'audio': "assets/Sandakari Neethan.mp3",
                      } ,{
                        'title': 'High On Love | Kudos Music Player',
                        'audio': "assets/High On Love.mp3",
                      } ,{
                                    'title': 'Yaen Ennai Pirindhaai | Kudos Music Player',
                                    'audio': "assets/Yaen Ennai Pirindhaai.mp3",
                                    } ];
  i = 0;
  n = playlist.length;
  let player = document.getElementById( 'player' );
  let dur = document.getElementById( 'dur' );
  playlist.forEach( function( i ) {
    console.log( i.audio )
    player.src = i.audio;
    $( '.title' ).html( i.title );
  }, );
  
  function calculateTotalValue( length ) {
    let minutes = Math.floor( length / 60 ),
      seconds_int = length - minutes * 60,
      seconds_str = seconds_int.toString( ),
      seconds = seconds_str.substr( 0, 2 ),
      time = minutes + ':' + seconds
    return time;
  }
  
  function calculateCurrentValue( currentTime ) {
    let current_hour = parseInt( currentTime / 3600 ) % 24,
      current_minute = parseInt( currentTime / 60 ) % 60,
      current_seconds_long = currentTime % 60,
      current_seconds = current_seconds_long.toFixed( ),
      current_time = ( current_minute < 10 ? "0" + current_minute : current_minute ) + ":" + ( current_seconds < 10 ? "0" + current_seconds : current_seconds );
    return current_time;
  }
  
  function initProgressBar( ) {
    let length = player.duration;
    let current_time = player.currentTime;
    let totalLength = calculateTotalValue( length )
    jQuery( ".end-time" ).html( totalLength );
    let currentTime = calculateCurrentValue( current_time );
    jQuery( ".start-time" ).html( currentTime );
    dur.value = player.currentTime;
    if ( player.currentTime == player.duration ) {
      $( "#play-btn" ).fadeIn( "slow", function( ) {
        $( this ).removeClass( "fa-pause" );
        $( this ).addClass( "fa-play" );
        dur.value = 0;
      } );
    }
  };
  
  function mSet( ) {
    player.currentTime = dur.value;
  }
  
  function mDur( ) {
    let length = player.duration;
    dur.max = length;
  }
  
  function initPlayers( num ) {
    for ( let i = 0; i < num; i++ ) {
      ( function( ) {
        let playerContainer = document.getElementById( 'player-container' ),
          player = document.getElementById( 'player' ),
          isPlaying = false,
          playBtn = document.getElementById( 'play-btn' );
        if ( playBtn != null ) {
          playBtn.addEventListener( 'click', function( ) {
            togglePlay( )
          } );
        }
  
        function togglePlay( ) {
          if ( player.paused === false ) {
            player.pause( );
            isPlaying = false;
            $( "#play-btn" ).fadeIn( "slow", function( ) {
              $( this ).removeClass( "fa-pause" );
              $( this ).addClass( "fa-play" );
            } );
          }
          else {
            player.play( );
            $( "#play-btn" ).fadeIn( "slow", function( ) {
              $( this ).removeClass( "fa-play" );
              $( this ).addClass( "fa-pause" );
            } );
            isPlaying = true;
          }
        }
      }( ) );
    }
  }
  $( "#next" ).data( 'dir', 1 );
  $( "#prev" ).data( 'dir', -1 );
  $( '#next, #prev' ).on( 'click', function( ) {
    i = ( i + $( this ).data( 'dir' ) + n ) % n;
    console.log( i );
    player.src = playlist[ i ].audio;
    $( '.title' ).html( playlist[ i ].title );
    $( '#play-btn' ).removeClass( "fa-play" );
    $( '#play-btn' ).addClass( "fa-pause" );
    player.play( );
  } );
  $( ".audio-player" )
    .toArray( )
    .forEach( function( player ) {
      let audio = $( player ).find( "audio" )[ 0 ];
      let volumeControl = $( player ).find( ".volumeControl .wrapper" );
      volumeControl.find( ".outer" ).on( "click", function( e ) {
        let volumePosition = e.pageX - $( this ).offset( ).left;
        let audioVolume = volumePosition / $( this ).width( );
        if ( audioVolume >= 0 && audioVolume <= 1 ) {
          audio.volume = audioVolume;
          $( this )
            .find( ".inner" )
            .css( "width", audioVolume * 100 + "%" );
        }
      } );
    } );
  $( function( ) {
    // Dropdown toggle
    $( '.dropdown-toggle' ).click( function( ) {
      $( this ).next( '.dropdown' ).slideToggle( "fast" );
    } );
    $( document ).click( function( e ) {
      var target = e.target;
      if ( !$( target ).is( '.dropdown-toggle' ) && !$( target ).parents( ).is( '.dropdown-toggle' ) ) {
        $( '.dropdown' ).hide( );
      }
    } );
  } );
  $( '#darkButton' ).click( switchDark );
  $( '#whiteButton' ).click( switchWhite );
  $( '#blueButton' ).click( switchBlue );
  
  function switchDark( ) {
    $( '#skin' ).attr( 'class', 'dark audio-player' );
    $( '.inner' ).css( 'background', '#fff' );
    $( '.title' ).css( 'color', '#fff' );
    $( '.time' ).css( 'color', '#fff' );
    $( '.fa-volume-up' ).css( {
      'color': '#fff'
    } );
    $( '.audio-player #play-btn' ).css( {
      'color': '#fff',
      'border-color': '#fff'
    } );
    $( '.ctrl_btn' ).css( {
      'color': '#fff',
      'border-color': '#fff'
    } );
  }
  
  function switchWhite( ) {
    $( '#skin' ).attr( 'class', 'white audio-player' );
    $( '.inner' ).css( 'background', '#555' );
    $( '.title' ).css( 'color', '#555' );
    $( '.time' ).css( 'color', '#555' );
    $( '.fa-volume-up' ).css( {
      'color': '#555'
    } );
    $( '.audio-player #play-btn' ).css( {
      'color': '#555',
      'border-color': '#555'
    } );
    $( '.ctrl_btn' ).css( {
      'color': '#555',
      'border-color': '#555'
    } );
  }
  
  function switchBlue( ) {
    $( '#skin' ).attr( 'class', 'blue audio-player' );
    $( '.inner' ).css( 'background', '#fff' );
    $( '.title' ).css( 'color', '#fff' );
    $( '.time' ).css( 'color', '#fff' );
    $( '.fa-volume-up' ).css( {
      'color': '#fff'
    } );
    $( '.audio-player #play-btn' ).css( {
      'color': '#fff',
      'border-color': '#fff'
    } );
    $( '.ctrl_btn' ).css( {
      'color': '#fff',
      'border-color': '#fff'
    } );
  }
  initPlayers( jQuery( '#player-container' ).length );
  