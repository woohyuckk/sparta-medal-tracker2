

# 🥇🥈🥉 Medal Tracker ( 메달 순위 기록 Project ) 


<br/>

## 💬 프로젝트 소개
> 📅 개발 기간 : 2025. 01. 21 ~ 2025. 01. 23 (총 3일)
> <br><br>
> <br> **useState** , **useEffect** **hook**을 사용하여 **Medal List**를 관리하였습니다.
> **LocalStorage** 활용한 메달 기록 집계

<br>
<br>

## ⚙ 프로젝트 기능 소개
- CRUD 기반의 프로젝트입니다.
- Create : 각 국의 금메달, 은메달, 동메달 정보를 받아 localStorage에 저장합니다.
- Read : 입력된 금메달, 은메달, 동메달 정보를 토대로 각 국가별 메달집계에 이미지 로드 합니다.
- Update : 메달이 집계된 리스트에국가들의 메달 정보를 수정합니다.
- Delete : 메달이 집계된 리스트에 국가들의 메달 정보를 삭제합니다.
<br>
<br>

## 📁 프로젝트 구조
```markdown
📁 프로젝트 구조
│
├── 📁 components/
│   ├── InputForm.jsx
│   ├── InputField.jsx
|   ├── MedalList.jsx
│   ├── ActionButtons.jsx
├── 📁 style/
│   ├── inputForm.css
│   ├── medalList.css
│   
├── index.css (스타일 파일 1개)
├── index.html
├── App.jsx
│   
│

```
# 메달 집계 관리 애플리케이션

이 프로젝트는 React를 사용하여 국가별 메달 집계를 관리하는 애플리케이션입니다. 사용자는 국가 정보를 추가, 수정, 삭제할 수 있으며 금메달 또는 메달 총합 기준으로 정렬할 수 있습니다.

---

## **파일 및 디렉토리 구조**

### **React Components**
- **`App.jsx`**: 메인 컴포넌트로, 전체 애플리케이션의 상태와 주요 로직을 관리.
- **`InputForm.jsx`**: 입력 폼 컴포넌트로, 사용자로부터 데이터를 입력받아 리스트에 추가하거나 수정하는 기능을 담당.

- **index.css에 통합**
- **`MedalList.jsx`**: 메달 데이터를 테이블 형태로 보여주고 정렬 및 삭제 기능을 포함한 컴포넌트.
- **`InputField.jsx`**: `InputForm`에서 사용되는 재사용 가능한 입력 필드 컴포넌트.

### **CSS Files**
- **`index.css`**: 전체 프로젝트의 전역 스타일 정의.
- **`MedalList.css`**: `MedalList` 컴포넌트의 테이블 스타일링 정의.
- **`InputForm.css`**: `InputForm` 컴포넌트의 레이아웃과 스타일 정의.

---

## **상세 설명**

### **React Components**

#### **1. App.jsx**
- **역할**:
  - 애플리케이션의 최상위 컴포넌트.
  - `medalRecords` 상태를 관리하며, 입력 폼과 메달 리스트 컴포넌트를 연결.
  - 로컬 스토리지를 활용하여 데이터를 저장 및 초기화.

- **주요 기능**:
  - `useState`로 메달 리스트 상태 관리.
  - `useEffect`로 로컬 스토리지 저장 및 불러오기 로직 포함.

---

#### **2. InputForm.jsx**
- **역할**:
  - 사용자 입력을 처리하는 컴포넌트.
  - 국가명, 금메달, 은메달, 동메달 수를 입력받아 데이터를 추가하거나 수정하는 기능.

- **주요 기능**:
  - `onSubmit`: 입력 데이터를 리스트에 추가.
  - `onUpdate`: 기존 데이터를 수정.
  - 중복 국가 추가 방지 및 메달 수의 유효성 검사(0 이상 조건).

---

#### **3. MedalList.jsx**
- **역할**:
  - 메달 데이터를 테이블로 출력하며 정렬(금메달/총합 기준)과 삭제 기능 제공.

- **주요 기능**:
  - **정렬**:
    - `handleGoldSort`: 금메달 기준 정렬. 금메달 수가 같을 경우 총합 기준으로 정렬.
    - `handleTotalSort`: 메달 총합 기준 정렬.
  - **삭제**:
    - 특정 국가 데이터를 삭제하는 `handleDelete` 함수 구현.

---

#### **4. InputField.jsx**
- **역할**:
  - 재사용 가능한 입력 필드 컴포넌트.
  - `InputForm`에서 국가명, 금메달, 은메달, 동메달 입력 필드로 활용.

- **Props**:
  - `label`: 입력 필드의 라벨.
  - `type`: 입력 필드 타입(e.g., `text`, `number`).
  - `value`: 입력값.
  - `onChange`: 입력값 변경 핸들러.

---

### **CSS Files**

#### **1. index.css**
- 전역 스타일 정의:
  - 폰트, 배경색, 레이아웃 중심 스타일 포함.
 
- **아직 나누지 못함**

#### **2. MedalList.css**
- 테이블 스타일 정의:
  - 테이블 행, 열, 헤더, 버튼 디자인 포함.

#### **3. InputForm.css**
- 입력 폼 스타일 정의:
  - 필드 간 간격, 배경색, 패딩 등을 설정.

---

## **주요 기능**

1. **데이터 관리(CRUD)**:
   - 국가 정보를 추가, 수정, 삭제 가능.

2. **정렬**:
   - 금메달 또는 총합 기준으로 오름차순/내림차순 정렬.

3. **로컬 스토리지**:
   - 데이터를 로컬 스토리지에 저장하여 새로고침 시에도 유지.

4. **반응형 디자인**:
   - 화면 크기에 따라 입력 폼과 테이블 레이아웃이 자동 조정.

---

## **설치 및 실행 방법**

### 1. **설치**
```bash
npm install
npm run dev
```

### 🔫트러블 슈팅

**[[React] Medal-Tracker 트러블슈팅 ( Container 밖으로 튀어나온 item, 우선순위 정렬)](https://forevero3o.tistory.com/24)**   
**[[React] useState에서 벗어나 useEffect 사용해보기 - State 관리관련 트러블슈팅](https://forevero3o.tistory.com/25)**

### 배포 사이트 

**[ Medal Tracker Project ](https://sparta-medal-tracker2-s55i.vercel.app/)** <br>   

   
![image](https://github.com/user-attachments/assets/844d09ad-0294-4cd0-a268-83107ec47435)



