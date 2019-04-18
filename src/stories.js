const mongoose = require('mongoose');

const connect = () => {
  return mongoose.connect('mongodb://serverless:serverless@ds239128.mlab.com:39128/serverless');
};

const createResponse = (status, body) => ({
  statusCode: status,
  body: JSON.stringify(body)
});

// 스토리 만들기
exports.createStory = (event, ctx, cb) => {
  ctx.callbackWaitsForEmptyEventLoop = false;
  connect().then(
    () => {
      cb(null, createResponse(200, { message: 'connected to db' }));
    }
  ).catch(
    (e) => {
      cb(null, createResponse(500, { error: e }));
    }
  )
};

  
 // 스토리 만들기
 exports.createStory = (event, ctx, cb) => {
    ctx.callbackWaitsForEmptyEventLoop = false;
    const { title, body } = JSON.parse(event.body);
    connect().then(
      () => {
        const story = new Story({ title, body });
        return story.save();
      }
    ).then(
      story => {
        cb(null, createResponse(200, story));
      }
    ).catch(
      e => cb(e)
    );
  };
  
  // 여러개의 스토리 리스팅
  exports.readStories = (event, ctx, cb) => {
    cb(null, createResponse(200, { message: 'list' }));
  };
  
  // 특정 스토리 읽기
  exports.readStory = (event, ctx, cb) => {
    cb(null, createResponse(200, { message: 'read' }));
  };
  
  // 스토리 수정
  exports.updateStory = (event, ctx, cb) => {
    cb(null, createResponse(200, { message: 'update' }));
  };
  
  // 스토리 삭제
  exports.deleteStory = (event, ctx, cb) => {
    cb(null, createResponse(200, { message: 'delete' }));
  };