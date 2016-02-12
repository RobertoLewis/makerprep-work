function getShortMessages(messages) {
      var results;
      results = messages.map(function(message){
          return message.message;
      }).filter(function(message){return message.length < 50;})

      return results;
    }

    module.exports = getShortMessages;
