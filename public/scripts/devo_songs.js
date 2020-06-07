let playlist = [ {
    'title': 'லிங்காஷ்டகம் | lingashtakam | Powerful chants of Lord Shiva By SPB | Kudos Music Player',
    'audio': "assets/லிங்காஷ்டகம்  lingashtakam  Powerful chants of Lord Shiva By SPB.mp3",
  }, { 
    'title': 'Om Shiva Hom - Naan Kadavul | Kudos Music Player',
    'audio': "assets/Om Shiva Hom  Naan Kadavul.mp3",
  }, {
    'title': 'Shiva Thandavam lyric Song | Kudos Music Player',
    'audio': "assets/Shiva Thandavam lyric.mp3",
  }, {
    'title': 'Shiv Tandaw New (2020) | Kudos Music Player',
    'audio': "assets/Shiv Tandaw New.mp3",
  }, {
    'title': 'MOST POPULAR SONG OF LORD SHIVA EVER | Kudos Music Player',
    'audio': "assets/MOST POPULAR SONG OF LORD SHIVA EVER.mp3",
  }, {
    'title': 'Om Shivaya - Part-2 | நமசிவாய நமசிவாய ஓம்நமசிவாய | Kudos Music Player',
    'audio': "assets/Om Shivaya . part-2  நமசிவாய நமசிவாய ஓம்நமசிவாய.mp3",
  }, {
    'title': 'Siva Sivaya Potri Song Baahubali (Tamil) | Kudos Music Player',
    'audio': "assets/Siva Sivaya Potri Song Baahubali (Tamil).mp3",
  }, {
    'title': 'Naduvan - Dr. Burn | Kudos Music Player',
    'audio': "assets/Naduvan  Dr. Burn.mp3",
  },  {
    'title': 'Lingashtakam By S.P. Balasubrahmaniam [Full Song] - Shiva Roopa Darshan | Kudos Music Player',
    'audio': "assets/Lingashtakam By S.P. Balasubrahmaniam [Full Song] - Shiva Roopa Darshan.mp3",
  }, {
    'title': 'Shiva Shiva Sankara | Kudos Music Player',
    'audio': "assets/Shiva Shiva Sankara.mp3",
  }, {
    'title': 'Unnai Ninaithale Mukthi - Lord Shiva Devotional Song | Kudos Music Player',
    'audio': "assets/Unnai Ninaithale Mukthi - Lord Shiva Devotional Song.mp3",
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
  