export interface SearchData {
    text: string
}

export interface Owner {
    account_id: number,
    reputation: number,
    user_id: number,
    user_type: string,
    profile_image: string,
    display_name: string,
    link: string
}

export interface QuestionResult {
    tags: string[],
    owner: Owner,
    is_answered: boolean,
    view_count: number,
    answer_count: number,
    score: number,
    last_activity_date: number,
    creation_date: number,
    last_edit_date?: number,
    question_id: number,
    content_license: string,
    link: string,
    title: string
}

export interface UserResult {
    "badge_counts": {
        "bronze": number,
        "silver": number,
        "gold": number
    },
    "account_id": number,
    "is_employee": boolean,
    "last_modified_date": number,
    "last_access_date": number,
    "reputation_change_year": number,
    "reputation_change_quarter": number,
    "reputation_change_month": number,
    "reputation_change_week": number,
    "reputation_change_day": number,
    "reputation": number,
    "creation_date": number,
    "user_type": string,
    "user_id": number,
    "website_url": string,
    "link": string,
    "profile_image": string,
    "display_name": string
}

export interface AnswerResult {
    "owner": Owner,
    "is_accepted": boolean,
    "score": number,
    "last_activity_date": number,
    "creation_date": number,
    "answer_id": number,
    "question_id": number,
    "content_license": string
}

export interface ResponseWrapper {
    items: QuestionResult[] | UserResult[] | AnswerResult[],
    has_more: boolean,
    backoff?: number,
    quota_max: number,
    quota_remaining: number
}