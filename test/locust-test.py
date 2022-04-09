from locust import HttpUser, task


class PokeMonUser(HttpUser):
    @task
    def performant_t(self):
        self.client.get("/pokemon")
