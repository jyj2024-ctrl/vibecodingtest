# Firebase 설정 가이드 (Firestore + Google 인증)

이 가이드는 팀 배정 데이터를 Firestore에 저장하고 Google 로그인으로 사용자를 인증하는 방법을 안내합니다.

## 📋 사전 준비

- Google 계정 (Firebase 로그인용)
- Firebase 프로젝트 생성 권한

## 🔥 Firebase 프로젝트 설정

### 1단계: Firebase 프로젝트 생성

1. [Firebase Console](https://console.firebase.google.com/) 접속
2. "프로젝트 추가" 클릭
3. 프로젝트 이름 입력: `team-building-day` (또는 원하는 이름)
4. Google Analytics 설정 (선택사항, 비활성화 가능)
5. "프로젝트 만들기" 클릭

### 2단계: Firestore Database 생성

1. 좌측 메뉴에서 **"빌드"** → **"Firestore Database"** 클릭
2. **"데이터베이스 만들기"** 클릭
3. **위치 선택**: `asia-northeast3` (서울) 또는 `asia-northeast1` (도쿄) 추천
4. **보안 규칙 시작 모드**:
   - **프로덕션 모드**를 선택
5. **"사용 설정"** 클릭

### 3단계: Google 인증 설정

1. 좌측 메뉴에서 **"빌드"** → **"Authentication"** 클릭
2. **"시작하기"** 클릭
3. **"Sign-in method"** 탭 선택
4. **"Google"** 제공업체 클릭
5. **"사용 설정"** 토글을 ON으로 변경
6. **프로젝트 지원 이메일** 선택 (본인 Gmail)
7. **"저장"** 클릭

### 4단계: 웹 앱 등록

1. Firebase 프로젝트 개요 페이지에서 **웹 아이콘(</>)** 클릭
2. 앱 닉네임 입력: `team-building-web`
3. **"Firebase Hosting 설정"은 체크 해제** (Netlify 사용)
4. **"앱 등록"** 클릭
5. **Firebase SDK 설정** 화면에서 설정 코드 복사:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456"
};
```

⚠️ **중요**: 위 설정 값을 안전하게 보관하세요!

### 5단계: Firestore 보안 규칙 설정

1. Firestore Database 페이지에서 **"규칙"** 탭 클릭
2. 다음 규칙을 복사하여 붙여넣기:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // 팀 배정 데이터
    match /teamAssignments/{assignmentId} {
      // 로그인한 사용자만 읽기 가능
      allow read: if request.auth != null;
      // 로그인한 사용자만 쓰기 가능
      allow write: if request.auth != null;
    }
    
    // 사용자 프로필 데이터
    match /users/{userId} {
      // 본인 데이터는 읽기/쓰기 가능
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

3. **"게시"** 클릭

### 6단계: 승인된 도메인 추가 (배포 후)

1. **Authentication** → **Settings** → **Authorized domains** 탭
2. Netlify 도메인 추가 (예: `your-app.netlify.app`)
3. 로컬 테스트용으로 `localhost`는 이미 추가되어 있음

## 🔧 웹사이트에 Firebase 설정 추가

### firebase-config.js 파일 수정

프로젝트 루트의 `firebase-config.js` 파일을 열고 Firebase Console에서 복사한 설정 값으로 변경하세요:

```javascript
const firebaseConfig = {
  apiKey: "실제_API_키",
  authDomain: "프로젝트-id.firebaseapp.com",
  projectId: "프로젝트-id",
  storageBucket: "프로젝트-id.appspot.com",
  messagingSenderId: "숫자",
  appId: "1:숫자:web:문자열"
};
```

⚠️ **YOUR_API_KEY 등을 실제 값으로 변경하세요!**

## ✅ 테스트

1. 웹사이트에 접속
2. **"Google로 로그인"** 버튼 클릭
3. Google 계정 선택하여 로그인
4. 팀구성 게임에서 이름 클릭하여 팀 배정
5. 로그아웃 후 다시 로그인
6. **이전 팀 배정이 그대로 유지되는지 확인** ✨

## 🔒 보안 주의사항

### API 키는 공개되어도 괜찮나요?
네, Firebase API 키는 클라이언트 측에서 사용되며 공개되어도 안전합니다. 실제 보안은 **Firestore 보안 규칙**으로 관리됩니다.

### 보안 규칙 설명
- `request.auth != null`: 로그인한 사용자만 접근 가능
- `request.auth.uid == userId`: 본인 데이터만 접근 가능

## 🆘 문제 해결

### "Permission denied" 오류
- Firestore 보안 규칙이 올바르게 설정되었는지 확인
- 로그인이 되어 있는지 확인
- Firebase Console에서 규칙 탭 확인

### 로그인 팝업이 차단됨
- 브라우저 팝업 차단 해제
- 다른 브라우저로 시도

### 데이터가 저장되지 않음
- 브라우저 콘솔(F12)에서 에러 확인
- Firebase Console → Firestore Database에서 데이터 확인
- `firebase-config.js`의 설정 값 확인

### 배포 후 로그인 안 됨
- Authentication → Settings → Authorized domains에 Netlify 도메인 추가
- 예: `your-app.netlify.app`

## 📊 데이터 구조

### teamAssignments 컬렉션
```javascript
{
  userId: "구글_고유_ID",
  email: "user@gmail.com",
  displayName: "사용자_이름",
  memberId: 1,
  memberName: "홍길동",
  department: "인재육성팀",
  teamIndex: 0,  // 0=A팀, 1=B팀, 2=C팀
  assignedAt: 1234567890
}
```

### users 컬렉션
```javascript
{
  uid: "구글_고유_ID",
  email: "user@gmail.com",
  displayName: "사용자_이름",
  photoURL: "프로필_사진_URL",
  lastLoginAt: 1234567890,
  teamAssignment: {
    memberId: 1,
    teamIndex: 0
  }
}
```

## 📞 지원

더 많은 정보는 [Firebase 공식 문서](https://firebase.google.com/docs)를 참고하세요.

---

**설정이 완료되면 팀 배정 데이터가 클라우드에 저장되어 어떤 기기에서든 접근 가능합니다!** ☁️✨
